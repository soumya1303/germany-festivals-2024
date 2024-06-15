/** @type {import('next').NextConfig} */

import {PHASE_DEVELOPMENT_SERVER} from "next/constants.js";

const nextConfig = (ph)=>{
  if (ph===PHASE_DEVELOPMENT_SERVER){
    return(  {
      reactStrictMode: true,
      env:{
        connStr:"mongodb://127.0.0.1:27017/fs24"
      },
      images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: 'a.cdn-hotels.com',
            port: '',
            pathname: '/gdcs/**',
          },
        ]
      }
    });
  }
  return({
    reactStrictMode: true,
    env:{
      connStr:"mongodb+srv://db-user:password0@cluster0.9sys7.mongodb.net/fsDB24?retryWrites=true&w=majority&appName=Cluster0"
    },
    images:{
      remotePatterns:[
        {
          protocol: 'https',
          hostname: 'a.cdn-hotels.com',
          port: '',
          pathname: '/gdcs/**',
        },
      ]
    }
  });
  
};

export default nextConfig;
