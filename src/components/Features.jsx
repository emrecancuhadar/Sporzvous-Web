import React from 'react';

const Features = () => {
    return (
        <section id="features" className="py-16 bg-white">
            <div className="container mx-auto text-center items-center">
                <h2 className="text-4xl font-bold mb-12">Your one-stop platform for sports</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-semibold mb-2">Play with players around you</h3>
                        <p className="text-center">Discover and connect with sports enthusiasts in your vicinity. Find players for your favorite sports and join local games effortlessly. Our app helps you build a strong community of players nearby, ensuring you never miss out on a game.</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-semibold mb-2">Skill-up your game</h3>
                        <p className="text-center">Elevate your skills with Sporzvous. Access tutorials, drills, and expert tips tailored to various sports. Whether you're a beginner or an experienced player, our resources are designed to help you improve and master your game.</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-semibold mb-2">Book sports venues nearby</h3>
                        <p className="text-center">Easily book sports venues near you with just a few taps. Our platform provides a seamless booking experience for a wide range of sports facilities, ensuring you get the perfect spot for your game every time.</p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl font-semibold mb-2">Manage your sports activities & groups</h3>
                        <p className="text-center">Organize and manage your sports activities and groups effortlessly. Create events, invite participants, and keep track of schedules and performance. Our app helps you streamline your sports management, making it easier to focus on playing and having fun.</p>
                    </div>
                </div>
                <div className='w-full py-2 my-12 bg-orange-500 text-white rounded-md shadow-lg '>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        {[
                            { stat: '2M+', label: 'Users', icon: 'fas fa-users' },
                            { stat: '50+', label: 'Sports', icon: 'fas fa-running' },
                            { stat: '6M+', label: 'Sports Activities Enabled', icon: 'fas fa-calendar-alt' },
                            { stat: '4M+', label: 'Player Connections Enabled', icon: 'fas fa-handshake' }
                        ].map(({ stat, label, icon }, index) => (
                            <div key={index} className="flex flex-col items-center justify-center px-4 py-6">
                                <i className={`${icon} text-4xl mb-4`}></i>
                                <div className="text-4xl font-bold">{stat}</div>
                                <div>{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
