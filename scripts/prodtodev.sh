cd auth-service
echo "ENV=DEV" > .env
cd .. && cd user-service
echo "ENV=DEV" > .env
cd .. && cd client
echo "ENV=DEV" > .env