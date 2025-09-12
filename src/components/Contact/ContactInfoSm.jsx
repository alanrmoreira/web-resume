import * as React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function ContactInfoSm(params) {
    return (
        <>
            <div className='phone-sm'>
                <ListItemAvatar className='phone-avatar'>
                    <Avatar sx={{ bgcolor: 'green' }}>
                        <PhoneAndroidIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Phone number" secondary="+1 368 299-5910" />
            </div>
        </>
    );
};
