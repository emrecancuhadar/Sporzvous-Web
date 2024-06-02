import React from 'react';
import m1 from '../images/man_1.jpg'
import m2 from '../images/man_2.jpg'
import m3 from '../images/man_3.jpg'
import m4 from '../images/man_4.jpg'

const Testimonials = () => {
    const testimonials = [
        { text: 'I love using this app. Very convenient to book courts for the weekends. Also, the notification about upcoming events is also a cool feature', author: 'Berk Şengül', img: m1 },
        { text: "Amazing app. It's a nice idea. I had badminton courts nearby but couldn't find players. The app helped me within 10 mins!", author: 'Emre Erol', img: m2 },
        { text: "Useful app. In the midst of nonsense app making and backup, Sporzvous is a comfortable one. It's here to stay. Need more speed. Kudos.", author: 'Çağan Özsır', img: m3 },
        { text: "Struggling to find sportsbuddies nearby? With Sportzvous, find and connect with sports enthusiasts nearby. Without wasting time, download Sporzvous and enjoy with others while doing sports!", author: 'Emrecan Çuhadar', img: m4 },
    ];

    return (
        <section id="testimonials" className="py-20" style={{ backgroundColor: '#F9FCFF' }}>
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-bold">Messages from Founders</h2>
                <div className="mt-8 grid md:grid-cols-2 gap-8">
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
