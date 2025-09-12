import { Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";

export default function SimpleList(params) {

    const { items, title } = params
    return (
        <>
            <Typography>
                <strong>{title}</strong>
                <List>
                    <Divider />
                    {items.map((item) => (
                        <ListItem divider sx={{ height: 45 }}>
                            - &nbsp; <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Typography>
        </>
    );
};


