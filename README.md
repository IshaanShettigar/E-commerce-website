# E-commerce-website
Using Docker and Kubernetes and a node environment 
## Please install npm before going any further

How to use(Windows)-
``` 
cd .\backend\
docker build -t backend .
docker run -p 3000:3000 
```

How to use(Ubuntu)-
``` 
cd .\backend\
docker build -t backend .
docker run backend 
```

File system planned-
```
E-commerce-website/
|
│── backend/
    |── auth/
    │   ├── auth.js - done
    │   └── users.js - done
    │
    ├── cart/
    │   ├── cart.js - done
    │   └── items.js - done
    │
    ├── products/
    │   |── catalogue.js - done
    │   └── items.js - done
    |
    ├── public/
    |   |── catalogue.html - done
    │   |── index.js - done
    │   |── index.html - done
    │   └── index.css - done
    |
    ├── config.js - done
    ├── index.js - done
    └── package.json - done
```
