"use client";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  const heroVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>twese360</title>
        <meta
          name="description"
          content="Explore our diverse services with twese360!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          Welcome to twese360
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Discover a world of services from food to tourism with our innovative
          platform.
        </motion.p>
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/get-started"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Explore Services Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
