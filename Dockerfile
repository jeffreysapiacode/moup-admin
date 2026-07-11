FROM nginx:alpine
COPY /dist/moup-admin/browser /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/nginx.conf
COPY /fullchain1.pem /usr/share/nginx
COPY /privkey1.pem /usr/share/nginx
EXPOSE 444
CMD ["nginx", "-g", "daemon off;"]

# Build and Deploy to AWS EC2
# ON LOCAL INSTANCE
# ng build --configuration=production
# cp /etc/letsencrypt/archive/admin.moup.io/fullchain1.pem ~/Code/moup-admin
# cp /etc/letsencrypt/archive/admin.moup.io/privkey1.pem ~/Code/moup-admin
# docker build --platform linux/amd64,linux/arm64 -t moup-admin .
# rm ~/Code/moup-admin/fullchain1.pem
# rm ~/Code/moup-admin/privkey1.pem
# docker tag moup-admin:latest registry.moup.io/moup-admin:latest
# docker push registry.moup.io/moup-admin:latest

# ON REMOTE INSTANCE
# ssh -i "~/moup-macbook-air.pem" ec2-user@3.147.184.206 sudo docker pull registry.moup.io/moup-admin:latest
# ssh -i "~/moup-macbook-air.pem" ec2-user@3.147.184.206 sudo docker kill moup-admin
# ssh -i "~/moup-macbook-air.pem" ec2-user@3.147.184.206 sudo docker rm moup-admin
# ssh -i "~/moup-macbook-air.pem" ec2-user@3.147.184.206 sudo docker run -d --name moup-admin -p 444:444 --restart always registry.moup.io/moup-admin:latest

# ng build --configuration=production && cp /etc/letsencrypt/archive/admin.moup.io/fullchain1.pem ~/Code/moup-admin && cp /etc/letsencrypt/archive/admin.moup.io/privkey1.pem ~/Code/moup-admin && docker build --platform linux/amd64,linux/arm64 -t moup-admin . && rm ~/Code/moup-admin/fullchain1.pem && rm ~/Code/moup-admin/privkey1.pem && docker tag moup-admin:latest registry.moup.io/moup-admin:latest && docker push registry.moup.io/moup-admin:latest && ssh -i "~/moup-macbook-air.pem" ec2-user@3.147.184.206 sudo docker pull registry.moup.io/moup-admin:latest && ssh -i "~/moup-macbook-air.pem" ec2-user@3.147.184.206 sudo docker kill moup-admin && ssh -i "~/moup-macbook-air.pem" ec2-user@3.147.184.206 sudo docker rm moup-admin && ssh -i "~/moup-macbook-air.pem" ec2-user@3.147.184.206 sudo docker run -d --name moup-admin -p 444:444 --restart always registry.moup.io/moup-admin:latest

################################
################################

# Build and Deploy Locally

# ON LOCAL INSTANCE
# ng build --configuration=production && cp /etc/letsencrypt/archive/admin.moup.io/fullchain1.pem ~/Code/moup-admin && cp /etc/letsencrypt/archive/admin.moup.io/privkey1.pem ~/Code/moup-admin && docker build --platform linux/amd64,linux/arm64 -t moup-admin . && rm ~/Code/moup-admin/fullchain1.pem && rm ~/Code/moup-admin/privkey1.pem && docker run -d --name moup-admin -p 444:444 --restart always moup-admin:latest
# ng build --configuration=production && cp /etc/letsencrypt/archive/admin.moup.io/fullchain1.pem ~/Code/moup-admin && cp /etc/letsencrypt/archive/admin.moup.io/privkey1.pem ~/Code/moup-admin && docker build --platform linux/amd64,linux/arm64 -t moup-admin . && rm ~/Code/moup-admin/fullchain1.pem && rm ~/Code/moup-admin/privkey1.pem && docker kill moup-admin && docker rm moup-admin && docker run -d --name moup-admin -p 444:444 --restart always moup-admin:latest
