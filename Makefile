pgup:
	@docker-compose up -d

pgdown:
	@docker-compose down

pglogs:
	@docker-compose logs -f --tail=50

pgps:
	@docker-compose ps
