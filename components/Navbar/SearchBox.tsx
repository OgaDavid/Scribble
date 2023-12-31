import React from 'react';
import { Command, CommandInput } from '@/components/ui/Command';

type SearchBoxProps = {
    
};

const SearchBox:React.FC<SearchBoxProps> = () => {
    
    return (
    <div>
        <Command className='bg-transparent border w-[300px] min-[900px]:w-[500px]'>
            <CommandInput className='border-none' placeholder='Search communities'/>
        </Command>
    </div>)
}
export default SearchBox;