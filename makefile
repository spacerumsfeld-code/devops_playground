SHELL := /bin/bash
API_PATH = ./packages/api
CLIENT_PATH = ./packages/client

dev:
	@echo Starting dev environment
	lerna bootstrap
	lerna run dev --parallel
	@echo Dev environment running! Have fun.

docker-build-client:
	@cd $(CLIENT_PATH) && @docker build

docker-build-api:
	@cd $(API_PATH) && @docker build

docker-run:
	@docker-compose up --build --force-recreate
