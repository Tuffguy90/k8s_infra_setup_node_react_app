cd auth-service
echo "ENV=PROD" > .env
cd .. && cd user-service
echo "ENV=PROD" > .env
cd .. && cd client
echo "ENV=PROD" > .env