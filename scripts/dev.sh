docker run --name auth -d -p 3002:3002 jdbprojects/auth
docker run --name user -d -p 3001:3002 jdbprojects/
docker run --name client -d -p 3000:3000 jdbprojects/user-service