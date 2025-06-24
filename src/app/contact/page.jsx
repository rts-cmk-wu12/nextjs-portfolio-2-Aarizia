import { IoIosArrowForward } from "react-icons/io";

export default function ContactPage() {

    return (
        <main className="flex flex-col gap-[0.625rem] py-[2.5rem] ">
            <h1 className="text-[2.125rem]">Get in touch</h1>
            <p>Thanks for stopping by! <span className="line-break">If you're looking for a motivated and detail-oriented web developer with a strong interest in front-end technologies and clean, responsive design—I’d love to hear from you. </span><span className="line-break">Whether it’s about a project, an internship, or just a quick conversation, feel free to reach out. I'm always open to new opportunities and ways to grow.</span> </p>
            <form className="flex flex-col gap-4 w-2/5 text-[#fff] mx-auto min-w-[13.7rem]">
                <label>
                    Email
                    <input type='email' placeholder="Please enter your email" />
                </label>
                <label>
                    Mobile
                    <input type='tel' placeholder="Enter mobile" />
                </label>
                <label>
                    Message
                    <textarea placeholder="Enter your message" rows={4}/>
                </label>
                <button className="flex justify-center gap-2 items-center bg-[#3F8E00] text-[#fff] text-base font-bold border border-[#62BA1B] py-4 rounded-md shadow-[0_0_50px_-12px_#3F8E00]">Submit <IoIosArrowForward /></button>
            </form>
        </main>
    )
}