"use client";

const Page = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const sms = {
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/sms", {
      method: "POST",
      body: JSON.stringify(sms),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    alert("Message sent.");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="p-10 rounded-lg border-2" onSubmit={onSubmit}>
        <h1 className="text-orange-500 uppercase font-mono text-3xl font-bold text-center">
          Send an SMS
        </h1>
        <label className="text-white block my-4 font-mono text-xl">
          Phone number:
        </label>
        <input
          type="tel"
          name="phone"
          className="px-3 py-1 rounded-md w-full bg-slate-600"
          autoComplete="off"
        />
        <label className="text-white block my-4 font-mono text-xl">
          Write message:
        </label>
        <textarea
          name="message"
          className="px-3 py-1 rounded-md w-full bg-slate-600"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 px-3 py-1 font-bold uppercase rounded-md w-full mt-6"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Page;
