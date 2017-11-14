# This uses the official aws cli to deploy the site.
# If you need an account created with permissions to deploy contact kbridges@drud.com

BUCKET_NAME=style.drud.com
REGION=us-west-2

clean:
	aws s3 rm s3://$(BUCKET_NAME)/ --recursive

push:
	aws s3 sync ./docs/ s3://$(BUCKET_NAME)

deploy: clean push
