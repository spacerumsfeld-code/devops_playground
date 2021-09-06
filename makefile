SHELL := /bin/bash

dev:
	@echo Starting dev environment
	lerna bootstrap
	lerna run dev --parallel
	@echo Dev environment running! Have fun.