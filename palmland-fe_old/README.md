This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





## Generating the docker image for development

Step 1: 
```bash
$ docker build -f Dockerfile.dev -t <name:tag> .
```
Here, 
```bash
-f: Path to the docker file
-t: Name and tag for the image
. : Context for the build process
```
Step 2: Finally, create a docker container by running 
```bash
$ docker run -d -it –rm -p [host_port]:[container_port] –name [container_name] [image_id/image_tag]
```
Here,
```bash
-d: Run container in background and print container ID
-it: Create an interactive container
-p: Map host port to container port
–name: Assign a name to the container
–rm: Automatically remove the container when it exits.
```
Step 3:  Verify whether the container has been created successfully by running
```bash
$ docker container ps
```
## Generating the docker image for production
```bash
$ docker build -f Dockerfile -t <name:tag> .
```
and repeat the above steps from Step 2 and 3

