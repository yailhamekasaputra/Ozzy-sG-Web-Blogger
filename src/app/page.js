import { allBlogs } from 'contentlayer/generated';
import HomeCoverSection from '../components/Home/HomeCoverSection';
import FeaturedPosts from '../components/Home/FeaturedPosts';
import RecentPosts from '../components/Home/RecentPosts';
import Slider from '../components/Home/Slider';
import CardSlider from '../components/Home/CardSlider';
import BlogList from '../components/Home/BlogList';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center md:mt-10">
      <Slider blogs={allBlogs} />
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <BlogList blogs={allBlogs} />
      <CardSlider blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
