import { Link } from "react-router-dom";
import Image from "../components/Image";
import Actions from "../components/Actions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        {/* details  */}
        <div className="flex gap-8 mt-2">
          <div className="flex flex-col gap-8 lg:w-3/5">
            <h1 className="text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, voluptatem magnam sint aspernatur corporis rem?
            </h1>
            <div>
              <p className="text-gray-500">
                written by &nbsp;
                <Link>
                  <span className="text-sm text-blue-800">John Doe &nbsp;</span>
                </Link>
                on &nbsp;
                <Link>
                  <span className="text-sm text-blue-800">
                    Web Design &nbsp;
                  </span>
                </Link>
                2 Hours ago
              </p>
            </div>
            <p className="text-gray-500 font-medium">
              {" "}
              Facere non esse impedit, possimus ratione accusantium, odio quod
              neque eius placeat ex dolore velit praesentium omnis maxime
              voluptatum odit modi voluptates tempora asperiores!Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo nisi a
              velit, fugit dignissimos quae laboriosam. Facere non esse impedit,
              possimus ratione accusantium, odio quod neque eius placeat ex
              dolore velit praesentium omnis maxime voluptatum odit modi
              voluptates tempora asperiores!
            </p>
          </div>
          <div className=" hidden lg:block w-2/5 ">
            <Image src={"profile.jpg"} w="600" className="rounded-2xl" />
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-3/4 flex flex-col">
            {/* Dummy content  */}

            <p className="text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis atque nemo veniam animi! Deserunt ullam possimus
              dignissimos assumenda, laudantium labore hic excepturi adipisci
              quo fugit eaque consectetur sequi, veniam ex temporibus totam
              commodi. Illo consequatur qui ad ab nam sunt beatae fugiat, modi
              et cumque exercitationem repellat ratione, atque, non magnam
              laudantium velit? Similique quibusdam fuga ea dolorum magni
              officia voluptate quam maxime? Sapiente tempora provident ipsam
              culpa maiores neque hic nihil libero? Velit facilis adipisci enim
              dolorem consequatur ad, aspernatur porro modi unde delectus,
              corporis neque iure commodi. Dolore libero illum debitis? Saepe
              eum explicabo incidunt iste temporibus.
            </p>

            <p className="text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis atque nemo veniam animi! Deserunt ullam possimus
              dignissimos assumenda, laudantium labore hic excepturi adipisci
              quo fugit eaque consectetur sequi, veniam ex temporibus totam
              commodi. Illo consequatur qui ad ab nam sunt beatae fugiat, modi
              et cumque exercitationem repellat ratione, atque, non magnam
              laudantium velit? Similique quibusdam fuga ea dolorum magni
              officia voluptate quam maxime? Sapiente tempora provident ipsam
              culpa maiores neque hic nihil libero? Velit facilis adipisci enim
              dolorem consequatur ad, aspernatur porro modi unde delectus,
              corporis neque iure commodi. Dolore libero illum debitis? Saepe
              eum explicabo incidunt iste temporibus.
            </p>

            <p className="text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis atque nemo veniam animi! Deserunt ullam possimus
              dignissimos assumenda, laudantium labore hic excepturi adipisci
              quo fugit eaque consectetur sequi, veniam ex temporibus totam
              commodi. Illo consequatur qui ad ab nam sunt beatae fugiat, modi
              et cumque exercitationem repellat ratione, atque, non magnam
              laudantium velit? Similique quibusdam fuga ea dolorum magni
              officia voluptate quam maxime? Sapiente tempora provident ipsam
              culpa maiores neque hic nihil libero? Velit facilis adipisci enim
              dolorem consequatur ad, aspernatur porro modi unde delectus,
              corporis neque iure commodi. Dolore libero illum debitis? Saepe
              eum explicabo incidunt iste temporibus.
            </p>

            <p className="text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis atque nemo veniam animi! Deserunt ullam possimus
              dignissimos assumenda, laudantium labore hic excepturi adipisci
              quo fugit eaque consectetur sequi, veniam ex temporibus totam
              commodi. Illo consequatur qui ad ab nam sunt beatae fugiat, modi
              et cumque exercitationem repellat ratione, atque, non magnam
              laudantium velit? Similique quibusdam fuga ea dolorum magni
              officia voluptate quam maxime? Sapiente tempora provident ipsam
              culpa maiores neque hic nihil libero? Velit facilis adipisci enim
              dolorem consequatur ad, aspernatur porro modi unde delectus,
              corporis neque iure commodi. Dolore libero illum debitis? Saepe
              eum explicabo incidunt iste temporibus.
            </p>

            <p className="text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis atque nemo veniam animi! Deserunt ullam possimus
              dignissimos assumenda, laudantium labore hic excepturi adipisci
              quo fugit eaque consectetur sequi, veniam ex temporibus totam
              commodi. Illo consequatur qui ad ab nam sunt beatae fugiat, modi
              et cumque exercitationem repellat ratione, atque, non magnam
              laudantium velit? Similique quibusdam fuga ea dolorum magni
              officia voluptate quam maxime? Sapiente tempora provident ipsam
              culpa maiores neque hic nihil libero? Velit facilis adipisci enim
              dolorem consequatur ad, aspernatur porro modi unde delectus,
              corporis neque iure commodi. Dolore libero illum debitis? Saepe
              eum explicabo incidunt iste temporibus.
            </p>

            <p className="text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis atque nemo veniam animi! Deserunt ullam possimus
              dignissimos assumenda, laudantium labore hic excepturi adipisci
              quo fugit eaque consectetur sequi, veniam ex temporibus totam
              commodi. Illo consequatur qui ad ab nam sunt beatae fugiat, modi
              et cumque exercitationem repellat ratione, atque, non magnam
              laudantium velit? Similique quibusdam fuga ea dolorum magni
              officia voluptate quam maxime? Sapiente tempora provident ipsam
              culpa maiores neque hic nihil libero? Velit facilis adipisci enim
              dolorem consequatur ad, aspernatur porro modi unde delectus,
              corporis neque iure commodi. Dolore libero illum debitis? Saepe
              eum explicabo incidunt iste temporibus.
            </p>

            <p className="text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis atque nemo veniam animi! Deserunt ullam possimus
              dignissimos assumenda, laudantium labore hic excepturi adipisci
              quo fugit eaque consectetur sequi, veniam ex temporibus totam
              commodi. Illo consequatur qui ad ab nam sunt beatae fugiat, modi
              et cumque exercitationem repellat ratione, atque, non magnam
              laudantium velit? Similique quibusdam fuga ea dolorum magni
              officia voluptate quam maxime? Sapiente tempora provident ipsam
              culpa maiores neque hic nihil libero? Velit facilis adipisci enim
              dolorem consequatur ad, aspernatur porro modi unde delectus,
              corporis neque iure commodi. Dolore libero illum debitis? Saepe
              eum explicabo incidunt iste temporibus.
            </p>

            <p className="text-justify mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              perferendis atque nemo veniam animi! Deserunt ullam possimus
              dignissimos assumenda, laudantium labore hic excepturi adipisci
              quo fugit eaque consectetur sequi, veniam ex temporibus totam
              commodi. Illo consequatur qui ad ab nam sunt beatae fugiat, modi
              et cumque exercitationem repellat ratione, atque, non magnam
              laudantium velit? Similique quibusdam fuga ea dolorum magni
              officia voluptate quam maxime? Sapiente tempora provident ipsam
              culpa maiores neque hic nihil libero? Velit facilis adipisci enim
              dolorem consequatur ad, aspernatur porro modi unde delectus,
              corporis neque iure commodi. Dolore libero illum debitis? Saepe
              eum explicabo incidunt iste temporibus.
            </p>

            {/* Comments section  */}

            <h2 className="font-bold underline mt-6 bg-green-200 text-gray-600">comments</h2>
            <Comments />
          </div>

          {/* single post side menu  */}
          <div className="md:w-1/4 flex flex-col text-sm sticky top-8 h-max">
            <h2 className="font-bold">Author</h2>
            <div className="mt-4 flex gap-8 align-center">
              <Image
                src={"profile.jpg"}
                w={48}
                h={48}
                className={"rounded-full cursor-pointer"}
              />
              <Link>
                {" "}
                <p className="text-blue-700 mt-2">John Doe</p>
              </Link>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, recusandae.
            </p>
            {/* social links  */}
            <div className="flex flex-row gap-4 mt-4">
              <Image
                src={"profile.jpg"}
                w={32}
                h={32}
                className={"rounded-full cursor-pointer"}
              />
              <Image
                src={"profile.jpg"}
                w={32}
                h={32}
                className={"rounded-full cursor-pointer"}
              />
            </div>
            <h2 className="mt-8 font-bold">Actions</h2>
            <Actions />

            {/* categories  */}
            <h2 className="mt-8 font-bold">Categories</h2>
            <div>
              <Link>
                <p className="underline mt-6">All</p>
              </Link>
              <Link>
                <p className="underline mt-2">Web Design</p>
              </Link>
              <Link>
                <p className="underline mt-2">Development</p>
              </Link>
              <Link>
                <p className="underline mt-2">Databases</p>
              </Link>
              <Link>
                <p className="underline mt-2">Search Engines</p>
              </Link>
              <Link>
                <p className="underline mt-2">Marketing</p>
              </Link>
            </div>
            <h2 className="mt-8 font-bold">Search</h2>
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;
