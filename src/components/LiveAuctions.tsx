import React from "react";

export const LiveAuctions = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gradient">Live Auctions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl bg-secondary backdrop-blur-md p-6 hover:shadow-2xl hover:bg-transparent-accent transition-all duration-300 border border-white/5"
          >
            <div className="aspect-video rounded-lg bg-gradient-secondary mb-4 group-hover:scale-105 transition-transform duration-300"></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-accent">NFT #{i + 1}</h3>
                <p className="text-sm text-secondary">By Artist Name</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-transparent-accent text-accent text-sm">
                12h left
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-secondary">Current Bid</p>
              <p className="font-semibold text-accent">2.5 ETH</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
