366  npm start
    
    
    docker build -t node-dock-tut .
    docker login
    docker build -t node-dock-tut .
    docker ps
    docker images
    docker run -it -p 9000:3000 node-dock-tut   
    #to run background
    docker run -d -p 9000:3000 node-dock-tut 
    #to edit source code
    docker run -it -p 9001:3000 -v $(pwd):/app node-dock-tut  
     