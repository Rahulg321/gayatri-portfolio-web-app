import Image from 'next/image';
import Gall from '@/public/gal01.jpg';
import TestimonialCard from '@/components/Cards/TestimonialCard';

const page = () => {
  return (
    <>
      <section className="big-container">
        <div>
          <div>
            <h1>Hey there My name is Gayatri!!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              placeat, quis vero soluta odit tenetur?
            </p>
            <button>Contact me</button>
          </div>

          <div>
            <Image src={Gall} alt="hero image" />
          </div>
        </div>
      </section>

      <section className="big-container">
        <div>
          <div></div>
          <div>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              quas similique nesciunt inventore accusantium ullam aperiam
              doloribus rem atque eius, optio odit minus tenetur accusamus,
              veniam dolorem. Esse, minus? Maiores?
            </p>
          </div>
        </div>
      </section>

      <section className="big-container">
        <div className="flex">
          <h2>Testimonials</h2>
          <p>Lorem ipsum dolor sit amet.</p>
          <div>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </section>

      <section className="big-container">
        <div>
          <div>
            <Image src={Gall} alt="hero image" />
          </div>
          <div>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              aspernatur accusantium in exercitationem, eum non inventore
              veritatis corporis illum. Repudiandae!
            </p>
            <button>Learn More</button>
          </div>
        </div>

        <div>
          <div>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              aspernatur accusantium in exercitationem, eum non inventore
              veritatis corporis illum. Repudiandae!
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <Image src={Gall} alt="hero image" />
          </div>
        </div>

        <div>
          <div>
            <Image src={Gall} alt="hero image" />
          </div>
          <div>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              aspernatur accusantium in exercitationem, eum non inventore
              veritatis corporis illum. Repudiandae!
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section className="big-container">
        <h2>Subscribe to Newsletter</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          nihil dignissimos explicabo odit dolorem enim!
        </p>
        <button>Subscribe</button>
      </section>

      <section className="big-container">
        <div>
          <div>
            <Image src={Gall} alt="hero image" />
          </div>
          <div>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              aspernatur accusantium in exercitationem, eum non inventore
              veritatis corporis illum. Repudiandae!
            </p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, omnis?
            </span>
            <span>Lorem ipsum dolordasdasdasda</span>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
