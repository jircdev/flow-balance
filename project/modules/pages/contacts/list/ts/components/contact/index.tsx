import React from 'react';
import type { IContentContact } from './types';
import { Image } from 'pragmate-ui/image';

export function ContentContact({fullName, phone, email, image}: IContentContact) {
    return (
        <div className="container-contact">
            <div className="content-image-profile--border">                
                <Image 
                    src={image} 
                    alt="Brasil vencio a Argentina" 
                />
            </div>
            <div className="content-data">
                <strong className="content-data__strong">{fullName}</strong>
                <span className="content-data__span">{phone}</span>
                <span className="content__data--email">{email}</span>
            </div>
        </div>
    )
}