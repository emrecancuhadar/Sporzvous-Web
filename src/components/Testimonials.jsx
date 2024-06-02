import React from 'react';
import f1 from '../images/female_1.jpg'
import f2 from '../images/female_2.jpg'
import m1 from '../images/man_1.jpg'
import m2 from '../images/man_2.jpg'
import m3 from '../images/man_3.jpg'
import m4 from '../images/man_4.jpg'

const Testimonials = () => {
    const testimonials = [
        { text: 'I love using this app. Very convenient to book courts for the weekends. Also, the notification about upcoming events is also a cool feature', author: 'Jose John', img: m1 },
        { text: "Amazing app. It's a nice idea. I had badminton courts nearby but couldn't find players. The app helped me within 10 mins!", author: 'Shalini Roy', img: f1 },
        { text: "Useful app. In the midst of nonsense app making and backup, Sporzvous is a comfortable one. It's here to stay. Need more speed. Kudos.", author: 'Sagar Agarwal', img: m2 },
        { text: "Love the app. Helps me meet sports enthusiasts and play anytime anywhere.", author: 'Arun Mohan', img: m3 },
        { text: "Best app for booking courts around your locality and book. It helped me a lot. Thanks.", author: 'Rizwan', img: m4 },
        { text: "The best app I have seen. This is exclusively for sports lovers.", author: 'Megha Prakash', img: f2 }
    ];

    return (
        <section id="testimonials" className="py-20" style={{ backgroundColor: '#F9FCFF' }}>
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">Verified By Sporzvous Users</h2>
                <div className="mt-8 grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded shadow flex flex-col justify-between h-full">
                            <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                            <div className="flex justify-between items-center w-full mt-auto">
                                <p className="text-[#FF5C00] font-bold">{testimonial.author}</p>
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.author}
                                    className="w-14 h-14 rounded-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
