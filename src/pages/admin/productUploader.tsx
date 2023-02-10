import trpc from '../api/trpc/[trpc]';
import { useRouter } from 'next/router'
import { title } from 'process'
import { NextPage } from 'next';
import { ValueType } from 'tailwindcss/types/config';

const productUploadPage: NextPage = () => {
    const mutation = trpc.product.upload.mutation(['product.mutation', {
        onSuccess: () => {
            console.log('success')
        }
    }]);
    const router = useRouter();
    const hello = trpc.useQuery(['example.hello', { name: 'from trpc' }]);
    
    return (
        <>
            <title> Upload Product</title>
            <main>
                <form>
                    <input type="text" className='bg-violet-100' name="title" placeholder="Title" />

                    <input type="text" name="description" placeholder="Description" />
                    <input type="text" name="price" placeholder="Price" />
                    <input type="text" name="image" placeholder="Image" />
                    <input type="text" name="category" placeholder="Category" />
                    <button type="submit">Submit</button>
                </form>
            </main>
        </>

    );
};

export default productUploadPage;
