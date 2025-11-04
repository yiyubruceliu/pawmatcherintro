import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section id="signup" className="bg-gradient-to-br from-[#6450b4] to-[#321478] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center font-sans text-4xl font-black uppercase text-white md:text-5xl">
          {"Join the Movement"}
        </h2>
        <p className="mb-12 text-center text-xl font-semibold text-[#d2ebeb]">
          {"Help us save lives - one swipe at a time"}
        </p>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* Sign Up Card */}
          <div className="rounded-3xl bg-white p-8 text-center transition-transform hover:scale-105">
            <div className="mb-4 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#69c3c3] p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201.1 201.1" className="h-12 w-12">
                  <path
                    fill="white"
                    d="M100.55,0C45.02,0,0,45.02,0,100.55s45.02,100.55,100.55,100.55,100.55-45.02,100.55-100.55S156.08,0,100.55,0ZM147.66,119.48h-51.82c-4.25,0-7.7-3.45-7.7-7.7v-51.82c0-4.25,3.45-7.7,7.7-7.7s7.7,3.45,7.7,7.7v44.12h44.12c4.25,0,7.7,3.45,7.7,7.7s-3.45,7.7-7.7,7.7Z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 font-sans text-3xl font-black uppercase text-[#321478]">{"Early Access"}</h3>
            <p className="mb-6 font-sans text-lg font-semibold text-[#6450b4]">
              {"Be among the first to use Paw Matcher when we launch. Sign up for exclusive early access."}
            </p>
            <Button
              size="lg"
              className="w-full rounded-full bg-[#69c3c3] px-8 py-6 text-lg font-bold uppercase text-white transition-all hover:scale-105 hover:bg-[#321478]"
              asChild
            >
              <a href="https://forms.gle/wAyoTDQTxq1pwTz69" target="_blank" rel="noopener noreferrer">
                {"Sign Up Now"}
              </a>
            </Button>
          </div>

          {/* Donate Card */}
          <div id="donate" className="rounded-3xl bg-white p-8 text-center transition-transform hover:scale-105">
            <div className="mb-4 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#321478] p-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170.54 236.59" className="h-12 w-12">
                  <path
                    fill="white"
                    d="M15.2,45.16h11.83v-11.73c0-4.73,3.85-8.58,8.58-8.58s8.58,3.85,8.58,8.58v11.69h11.69c4.73,0,8.58,3.85,8.58,8.58s-3.85,8.58-8.58,8.58h-11.83v11.73c0,4.73-3.85,8.58-8.58,8.58s-8.58-3.85-8.58-8.58v-11.69h-11.69c-4.73,0-8.58-3.85-8.58-8.58s3.85-8.58,8.58-8.58ZM168.52,53.04c-6.9,15.35-18.72,11.77-30.34,19.26-5.72,3.69-10.7,8.81-14.15,14.72-15.71,26.92-28.32,58.31-42.66,86.08-4.56,14.64.01,20.28,3.41,33.22,5.34,20.35-17.9,36.88-36.19,27.66-5.54-2.79-6.99-6.07-10.9-9.95-7.17-7.13-13.78-3.22-21.95-6.66-10.24-4.31-16.93-15.59-15.56-26.65,3.46-27.91,32.89-16.69,44.17-38.4,12.7-28.81,31.62-57.38,43.54-86.24,3.18-7.69,3.55-18.04,1.31-26.01-1.81-6.42-5.26-10.61-4.3-17.95,2.39-18.3,23.4-27.95,39-18.34,5.32,3.28,8.07,9.64,13.2,12.12,5.02,2.43,11.09.67,16.68,2.89,13,5.16,20.61,21.16,14.73,34.25Z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 font-sans text-3xl font-black uppercase text-[#321478]">{"Support Our Cause"}</h3>
            <p className="mb-6 font-sans text-lg font-semibold text-[#6450b4]">
              {"Every donation helps us build better technology and save more dogs. Make a difference today."}
            </p>
            <Button
              size="lg"
              className="w-full rounded-full bg-[#321478] px-8 py-6 text-lg font-bold uppercase text-white transition-all hover:scale-105 hover:bg-[#6450b4]"
              asChild
            >
              <a href="https://gofund.me/0c914a7d8" target="_blank" rel="noopener noreferrer">
                {"Donate Now"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
