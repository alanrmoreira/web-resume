import React from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

export default function CertificationsItems(params) {
    return (
        <>
            <div className='flex-content'>

                <div className='single-card'>
                    <Card variant="outlined" sx={{ width: 240, minWidth: 240 }}>
                        <CardOverflow>
                            <AspectRatio ratio="3">
                                <img
                                    src="ielts-logo.png"
                                    srcSet="ielts-logo.png 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">IELTS</Typography>
                            <Typography level="body-sm">Issued Nov 2022</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    Curitiba | Brazil
                                </Typography>

                            </CardContent>
                        </CardOverflow>
                    </Card>

                </div>

                <div className='single-card'>
                    <Card variant="outlined" sx={{ width: 240, minWidth: 240 }}>
                        <CardOverflow>
                            <AspectRatio ratio="3">
                                <img
                                    src="det-logo.png"
                                    srcSet="det-logo.png 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">DET</Typography>
                            <Typography level="body-sm">Issued Mar 2023</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    Curitiba | Brazil
                                </Typography>

                            </CardContent>
                        </CardOverflow>
                    </Card>
                </div>

                <div className='single-card'>
                    <Card variant="outlined" sx={{ width: 240, minWidth: 240 }}>
                        <CardOverflow>
                            <AspectRatio ratio="3">
                                <img
                                    src="psm1-logo.png"
                                    srcSet="psm1-logo.png 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">PSM 1</Typography>
                            <Typography level="body-sm">Issued Apr 2021</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    Curitiba | Brazil
                                </Typography>

                            </CardContent>
                        </CardOverflow>
                    </Card>
                </div>

                <div className='single-card'>
                    <Card variant="outlined" sx={{ width: 240, minWidth: 240 }}>
                        <CardOverflow>
                            <AspectRatio ratio="3">
                                <img
                                    src="lacp-logo.png"
                                    srcSet="lacp-logo.png 2x"
                                    loading="lazy"
                                    alt="Systems Analysis and Software Development"
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">LACP</Typography>
                            <Typography level="body-sm">Issued May 2021</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    Curitiba | Brazil
                                </Typography>

                            </CardContent>
                        </CardOverflow>
                    </Card>
                </div>

                <div className='single-card'>
                    <Card variant="outlined" sx={{ width: 240, minWidth: 240 }}>
                        <CardOverflow>
                            <AspectRatio ratio="3">
                                <img
                                    src="lss-logo.png"
                                    srcSet="lss-logo.png 2x"
                                    loading="lazy"
                                    alt="Technician in Software Development"
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">LSS - Green Belt</Typography>
                            <Typography level="body-sm">Issued Aug 2019</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    Curitiba | Brazil
                                </Typography>

                            </CardContent>
                        </CardOverflow>
                    </Card>
                </div>


            </div>
        </>
    );
};
