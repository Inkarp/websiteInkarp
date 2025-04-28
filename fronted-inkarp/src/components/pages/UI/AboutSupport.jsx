import { MotionDiv, MotionFigure } from '../../../utils/MotionWrapper';

const AboutSupport = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            {/* Shape Decorations */}
            <MotionDiv
              className="absolute bottom-20 left-0 w-32 h-32 bg-no-repeat bg-contain rotate-[15deg] z-0"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1050&q=80)" }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />
            <MotionDiv
              className="absolute top-24 right-0 w-32 h-32 bg-no-repeat bg-contain rotate-[15deg] z-0"
              style={{ backgroundImage: "url(https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1050&q=80)" }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />

            {/* Main Image (Smaller Width) */}
            <MotionFigure
              className="relative z-10 w-3/4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1050&q=80"
                alt="about-13"
                className="rounded-lg shadow-lg"
              />
            </MotionFigure>

            {/* Overlay Image (Larger Width) */}
            <MotionFigure
              className="absolute right-0 bottom-0 z-20 w-3/4"
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1050&q=80"
                alt="about-14"
                className="rounded-lg shadow-xl"
              />
            </MotionFigure>
          </div>

          {/* Content Column */}
          <MotionDiv
            className="relative z-10"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <h5 className="text-sm font-semibold uppercase text-red-600 ">Inkarp</h5>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                A Step to Robust <br /> Customer Support
              </h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>
                In every organization, customer satisfaction and service efficacy are critical
                differentiators. Recognizing this, we've established a robust customer support strategy
                to meet our customers' post-sale requirements. Our engineers undergo training at the
                Principal's facility, which is a continuous process at Inkarp.
              </p>
              <p>
                With a legacy of over 36 years of successful operations in India, we at Inkarp,
                continue to stay committed to providing best-in-class products and solutions to our
                customers.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSupport;
