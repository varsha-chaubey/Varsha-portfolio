"use client"

import projects from "@/data/projects.json"
import ProjectGallery from "@/data/projectGallery.json"
import ProjectCard from "../shared/peoject-card"
import GalleryItem from "../shared/gallery-item"
import SectionHeading from "../shared/section-heading"

export default function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  )

 

  
  return (
    <section
      id="projects"
      className="relative px-4 mt-10"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="container-width relative">
        <SectionHeading
          title="Selected projects and scalable production systems."
          subtitle="Projects"
        />

        {/* FEATURED */}
        <div className="space-y-10 grid xl:grid-cols-3 xl:gap-x-4">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* GALLERY */}
        {/* <div className="mt-24">
          <h3 className="mb-10 text-2xl font-semibold text-white">
            Project Gallery
          </h3>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ProjectGallery.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}