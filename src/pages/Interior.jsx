import ImageSlider from "../components/ImageSlider";

function Interior() {
  return (
    <div className="m-auto mb-8 space-y-8 px-5 py-9 text-center md:max-w-[80%] lg:max-w-[70%]">
      <h1 className="text-center font-primary text-[80px]">Our Interior</h1>
      <div>
        <h3 className="m-auto mb-5 w-fit border-b border-black text-center font-primary text-[30px]">
          Ambiance of Elegance
        </h3>
        <ImageSlider folder="Ambiance of Elegance" />
        <p
          className=" font-text2  text-lg
  first-letter:text-3xl "
        >
          Experience the allure of Kasbah Cuisine as you step into a world of
          refined elegance. Our restaurant is adorned with Moroccan lanterns
          casting intricate patterns, creating a chic and inviting atmosphere.
          Whether it's a romantic dinner or a celebratory gathering, our stylish
          decor sets the stage for an unforgettable dining experience.
        </p>
      </div>
      <div>
        <h3 className="m-auto mb-5 w-fit border-b border-black text-center font-primary text-[30px]">
          The Heartbeat of Flavor
        </h3>
        <ImageSlider folder="Heartbeat of Flavor" />
        <p
          className=" font-text2  text-lg
  first-letter:text-3xl "
        >
          Journey into our bustling kitchen, where the magic of Moroccan cuisine
          comes to life. Surrounded by the tantalizing aromas of spices and
          herbs, our talented chefs craft each dish with care and precision.
          Peek behind the scenes as our culinary artisans turn fresh ingredients
          into culinary masterpieces that will delight your palate.
        </p>
      </div>
      <div>
        <h3 className="m-auto mb-5 w-fit border-b border-black text-center font-primary text-[30px]">
          A Feast for the Senses
        </h3>
        <ImageSlider folder="A Feast for the Senses" />
        <p
          className=" font-text2  text-lg
  first-letter:text-3xl "
        >
          Lose yourself in a sensory adventure as you explore the vibrant
          tapestry of colors, textures, and aromas that adorn our dining space.
          From the rich hues of our furnishings to the tantalizing scent of
          sizzling spices, every detail has been carefully curated to delight
          the senses. Whether dining al fresco or indoors, every moment at
          Kasbah Cuisine is a feast for the senses.
        </p>
      </div>
      <div>
        <h3 className="m-auto mb-5 w-fit border-b border-black text-center font-primary text-[30px]">
          Oasis of Tranquility
        </h3>
        <ImageSlider folder="Oasis of Tranquility" />
        <p
          className=" font-text2  text-lg
  first-letter:text-3xl "
        >
          Escape the hustle and bustle of the outside world and unwind in our
          serene oasis. Our secluded courtyard offers a peaceful retreat amidst
          lush greenery and soothing water features. Whether it's a quiet moment
          of solitude or a leisurely meal with loved ones, our courtyard
          provides the perfect backdrop for relaxation and rejuvenation.
        </p>
      </div>
      <div>
        <h3 className="m-auto mb-5 w-fit border-b border-black text-center font-primary text-[30px]">
          Attention to Detail
        </h3>
        <ImageSlider folder="attention to details" />
        <p
          className=" font-text2  text-lg
  first-letter:text-3xl "
        >
          we believe that it's the little things that make all the difference.
          From the meticulous presentation of each dish to the attentive service
          of our staff, we strive to exceed your expectations. Whether it's a
          special occasion or just an impromptu night out, we go above and
          beyond to ensure that every visit to Kasbah Cuisine is nothing short
          of extraordinary.
        </p>
      </div>
    </div>
  );
}

export default Interior;
