import { useState } from "react";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Home() {

const videos = await prisma.Video.findMany();

const videosEl = videos.map((videos) => <li>{videos.name}</li>)
return (
  <main>
    {videosEl}
    </main>
    );
}

