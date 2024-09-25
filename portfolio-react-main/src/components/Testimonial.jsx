import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Taylor"}
          feedback={"Your coding skills are so good."}
        />

        <TestimonialCard
          name={"David"}
          feedback={
            "Wow what a portfolio, did not expect this much of content!"
          }
        />

        <TestimonialCard
          name={"Monty"}
          feedback={"Amazing seems like an art!"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
