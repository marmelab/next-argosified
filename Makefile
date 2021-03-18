.PHONY: release

help:
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# =====================================================================
# Development recipies ================================================
# =====================================================================

install: ## install node dependencies
	docker-compose run --no-deps --rm next bash -ci 'npm install'

start: ## start docker containers
	docker-compose up -d

stop: ## stop docker containers
	docker-compose down

logs:
	docker-compose logs -f
