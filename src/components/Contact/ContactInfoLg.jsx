import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactInfoLg(params) {
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className='form-info-list'>
                <ListItem >
                    <ListItemAvatar >
                        <Avatar sx={{ bgcolor: 'green' }}>
                            <LocationOnIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Localtion" secondary="Calgary/AB - Canada" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'green' }}>
                            <PhoneAndroidIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Phone number" secondary="+1 368 299-5910" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'green' }}>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="E-mail" secondary="alan@a7tech.ca" />
                </ListItem>
            </List>
        </>
    );
};
