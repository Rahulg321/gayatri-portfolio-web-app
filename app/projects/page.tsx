import ProjectCard from '@/components/Cards/ProjectCard';

const page = () => {
  return (
    <section className="big-container">
      <h1 className="heading">See my projects</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        voluptatum reprehenderit reiciendis unde temporibus quam, corrupti quod
        atque blanditiis et, nihil officiis voluptate obcaecati enim magni qui
        vitae itaque veniam? Voluptate earum molestiae molestias possimus quae
        maiores consequuntur enim, sunt necessitatibus ipsam, aspernatur minus,
        neque aperiam in eum autem obcaecati odit. Eaque incidunt commodi,
        deserunt illum hic nisi pariatur harum! Magni ullam eligendi temporibus
        quidem dolores minima, labore laborum, ex consequatur consectetur
        placeat voluptatum tenetur amet nostrum incidunt! Pariatur nam aliquid
        fuga repellendus iste. Modi fugiat asperiores voluptas repellat itaque!
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default page;
