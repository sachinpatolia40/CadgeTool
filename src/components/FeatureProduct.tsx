import { JSX } from "react";

const featureProductList = [
    {
        title: 'High-Speed Steel Endmills',
        description: 'Optimal performance for standard machining operations',
        image: `${import.meta.env.BASE_URL}/feature1.png`
    },
    {
        title: 'Carbide Endmills',
        description: 'Superior hardness and wear resistance',
        image: `${import.meta.env.BASE_URL}/feature2.png`
    },
    {
        title: 'Specialty Cutters',
        description: 'Custom solutions for unique applications',
        image: `${import.meta.env.BASE_URL}/feature3.png`
    },
    {
        title: 'Micro Tools',
        description: 'Precision tools for intricate operations',
        image: `${import.meta.env.BASE_URL}/feature2.png`
    }
]


export const FeatureProducts = (): JSX.Element => {
    return (<>
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Featured products</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {featureProductList.map((product, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={product.image} alt={product.title} className="w-full object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <button className="text-primary hover:text-blue-700 font-semibold">
                                    View Details →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>)
}
