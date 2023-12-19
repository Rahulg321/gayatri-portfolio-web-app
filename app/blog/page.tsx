import React from 'react';
import BlogCard from '@/components/Cards/BlogCard';

const page = () => {
  return (
    <section className="big-container">
      <h1 className="heading">Blog</h1>
      <h3>Get the latest news about me</h3>

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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default page;
