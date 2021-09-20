.PHONY: all
all: backend frontend

.PHONY: backend
backend: build_backend_docker

.PHONY: frontend
frontend: build_frontend_docker

COMMIT				:= $(shell git rev-parse HEAD)
LATEST				:= latest

# >>> BACKEND APP >>> ##################################################################################################

BACKEND_REPOSITORY_NAME		:= academy/simple-webservice
BACKEND_DOCKERFILE			:= src/main/docker/Dockerfile
BACKEND_IMAGE_COMMIT		:= ${BACKEND_REPOSITORY_NAME}:${COMMIT}

build_jar:
	@cd simpleWebservice && \
		./gradlew clean build

build_backend_docker: build_jar
	@cd simpleWebservice && \
		docker image build -f ${BACKEND_DOCKERFILE} -t ${BACKEND_IMAGE_COMMIT} .
	@docker tag ${BACKEND_IMAGE_COMMIT} ${BACKEND_REPOSITORY_NAME}:${LATEST}

# >>> FRONTEND APP >>> #################################################################################################

FRONTEND_REPOSITORY_NAME		:= academy/simple-frontend
FRONTEND_DOCKERFILE				:= Dockerfile
FRONTEND_IMAGE_COMMIT			:= ${FRONTEND_REPOSITORY_NAME}:${COMMIT}

build_frontend_docker:
	@cd simpleFrontEnd && \
		docker image build -f ${FRONTEND_DOCKERFILE} -t ${FRONTEND_IMAGE_COMMIT} .
	@docker tag ${FRONTEND_IMAGE_COMMIT} ${FRONTEND_REPOSITORY_NAME}:${LATEST}

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
db:
	@docker-compose up -d db