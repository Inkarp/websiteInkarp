function Images() {
    return (
        <div className="min-h-screen  grid place-content-center gap-50 grid-flow-col p-8">
          <div className="flex flex-col justfy-center items-center">
          <img
            src="https://picsum.photos/id/1051/250/250"
            alt="Sample 1"
            className="masked-img w-[500px] h-[500px] cursor-pointer transition-all grayscale hover:grayscale-0"
          />
          <h1 className="font-bold font-[MaxOT]">Board of Directors</h1>
          </div>
          <div className="flex flex-col justfy-center items-center">
          <img
            src="https://picsum.photos/id/1051/250/250"
            alt="Sample 1"
            className="masked-img w-[500px] h-[500px] cursor-pointer transition-all grayscale hover:grayscale-0"
          />
          <h1 className="font-bold font-[MaxOT]">Marketing Team</h1>
          </div>
    
          {/* Important raw CSS included internally */}
          <style>{`
            .masked-img {
              --_g: 10%/45% 45% no-repeat conic-gradient(#000 0 0);
              mask: 
                left var(--_i, ) top var(--_g),
                bottom var(--_i, ) left var(--_g),
                top var(--_i, ) right var(--_g),
                right var(--_i, ) bottom var(--_g);
              -webkit-mask: 
                left var(--_i, ) top var(--_g),
                bottom var(--_i, ) left var(--_g),
                top var(--_i, ) right var(--_g),
                right var(--_i, ) bottom var(--_g);
              filter: grayscale(100%);
              transition: filter 0.3s linear, mask 0.3s linear, -webkit-mask 0.3s linear;
            }
            .masked-img:hover {
              --_i: 10%;
              filter: grayscale(0%);
            }
          `}</style>
        </div>
      );
    };


export default Images;