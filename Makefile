.PHONY: all
all: backend frontend

.PHONY: dockerLocal
dockerLocal: build_backend_docker build_frontend_docker up

.PHONY: backend
backend: build_backend_docker push_backend

.PHONY: frontend
frontend: build_frontend_docker push_frontend


COMMIT		:= $(shell git rev-parse HEAD)
LATEST		:= latest

AWS_ECR_PUBLIC_REPOSITORY_PREFIX		:= public.ecr.aws/t0t2o6x5
AWS_PLAYGROUND_REGION					:= us-east-1

# >>> BACKEND APP >>> ##################################################################################################

BACKEND_REPOSITORY_NAME		:= academy/simple-webservice
BACKEND_REPOSITORY_URI		:= ${AWS_ECR_PUBLIC_REPOSITORY_PREFIX}/${BACKEND_REPOSITORY_NAME}

BACKEND_DOCKERFILE			:= src/main/docker/Dockerfile
BACKEND_IMAGE_COMMIT		:= ${BACKEND_REPOSITORY_NAME}:${COMMIT}

build_jar:
	@cd simpleWebservice && \
		./gradlew clean build

build_backend_docker: build_jar
	@cd simpleWebservice && \
		docker image build -f ${BACKEND_DOCKERFILE} -t ${BACKEND_IMAGE_COMMIT} .
	@docker tag ${BACKEND_IMAGE_COMMIT} ${BACKEND_REPOSITORY_NAME}:${LATEST}
	@docker tag ${BACKEND_IMAGE_COMMIT} ${BACKEND_REPOSITORY_URI}:${COMMIT}
	@docker tag ${BACKEND_IMAGE_COMMIT} ${BACKEND_REPOSITORY_URI}:${LATEST}

push_backend:
	@aws ecr-public get-login-password --region ${AWS_PLAYGROUND_REGION} | docker login --username AWS --password-stdin ${AWS_ECR_PUBLIC_REPOSITORY_PREFIX}
	@docker push ${BACKEND_REPOSITORY_URI}:${COMMIT}
	@docker push ${BACKEND_REPOSITORY_URI}:${LATEST}
	@docker logout ${AWS_ECR_PUBLIC_REPOSITORY_PREFIX}

# >>> FRONTEND APP >>> #################################################################################################

FRONTEND_REPOSITORY_NAME		:= academy/simple-frontend
FRONTEND_REPOSITORY_URI			:= ${AWS_ECR_PUBLIC_REPOSITORY_PREFIX}/${FRONTEND_REPOSITORY_NAME}

FRONTEND_DOCKERFILE			:= Dockerfile
FRONTEND_IMAGE_COMMIT		:= ${FRONTEND_REPOSITORY_NAME}:${COMMIT}

build_frontend_docker:
	@cd simpleFrontEnd && \
		docker image build -f ${FRONTEND_DOCKERFILE} -t ${FRONTEND_IMAGE_COMMIT} .
	@docker tag ${FRONTEND_IMAGE_COMMIT} ${FRONTEND_REPOSITORY_NAME}:${LATEST}
	@docker tag ${FRONTEND_IMAGE_COMMIT} ${FRONTEND_REPOSITORY_URI}:${COMMIT}
	@docker tag ${FRONTEND_IMAGE_COMMIT} ${FRONTEND_REPOSITORY_URI}:${LATEST}

push_frontend:
	@aws ecr-public get-login-password --region ${AWS_PLAYGROUND_REGION} | docker login --username AWS --password-stdin ${AWS_ECR_PUBLIC_REPOSITORY_PREFIX}
	@docker push ${FRONTEND_REPOSITORY_URI}:${COMMIT}
	@docker push ${FRONTEND_REPOSITORY_URI}:${LATEST}
	@docker logout ${AWS_ECR_PUBLIC_REPOSITORY_PREFIX}

# >>> DOCKER COMPOSE >>> ###############################################################################################

.PHONY: up
up:
	@docker-compose up -d

.PHONY: down
down:
	@docker-compose down

.PHONY: logs
logs:
	@docker-compose logs -f --tail=50
.PHONY: ps
ps:
	@docker-compose ps

.PHONY: db
db: dbup wait baseline migrate

.PHONY: dbup
dbup:
	@docker-compose up -d db

.PHONY: wait
wait:
	@sleep 3

.PHONY: baseline
baseline:
	@cd simpleWebService && ./gradlew flywayBaseline

.PHONY: migrate
migrate:
	@cd simpleWebService && ./gradlew flywayMigrate
