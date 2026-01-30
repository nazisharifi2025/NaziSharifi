import Link from 'next/link'
import { BlogFrontmatter } from '../(Pages)/blogs/blog'
import { ArrowRight } from 'lucide-react'

function DataCard({blog}:{blog:BlogFrontmatter}) {
  return (
     <div className="text-gray-400 " >
            <div className="border border-fuchsia-400/20 h-[74vh] hover:border-fuchsia-400/20 shadow-fuchsia-400/40 hover:shadow-[0_0_12px_0_rgba(0,0,0,0.3)]  rounded-md  hover:-translate-y-2 transition-all duration-700 cursor-pointer">
              <img src={blog.image} className="w-full rounded-t-md h-[200px]" alt="" />
              <div className=" w-full flex flex-col h-[250px] justify-between">
              <div className="flex flex-col gap-2 py-5 p-2">
                <div className=" flex justify-between items-center px-3">
                <span>{blog.publishedAt}</span>
                <button className="px-3 text-white font-normal py-1 rounded-full text-sm flex justify-center items-center space-x-1 bg-blue-700"><Tag width={17} height={17} />{blog.category} </button>
                </div>
              <h3 className="font-semibold text-xl">{blog.title}</h3>
              <p className="text-gray-500 text-sm font-medium">{blog.excerpt}</p>
              </div>
              <div className="flex justify-between items-center px-3">
                <span>{blog.readTime}</span>
               <Link className="text-blue-700 font-medium flex items-center cursor-pointer hover:text-blue-500" href={`/blogs/${blog.slug}`} > Read More <ArrowRight size={18} /></Link>
              </div>
              </div>
            </div>
          </div>
  )
}

export default DataCard