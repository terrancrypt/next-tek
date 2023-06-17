import Link from 'next/link'
import React from 'react'
import { dataLinks } from './dataLinks'
import NewsletterForm from '../NewsletterForm/NewsletterForm'

const FooterTop: React.FC = () => {
    return (
        <div className='pb-10 flex justify-between border-b'>
            <div className='flex gap-16'>
                <ul className='space-y-3'>
                    {dataLinks.contactLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.url}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <ul className='space-y-3'>
                    {dataLinks.supportLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.url}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <ul className='space-y-3'>
                    {dataLinks.otherNavigate.map((link, index) => (
                        <li key={index}>
                            <Link href={link.url}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <NewsletterForm />
        </div>
    )
}

export default FooterTop