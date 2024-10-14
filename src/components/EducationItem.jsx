import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

export default function EducationItem(params) {
    return (

        <>
            <div className='flex-content'>

                <div className='single-card'>
                    <Card variant="outlined" sx={{ width: 240, minWidth: 240 }}>
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img
                                    src="sait-logo.png"
                                    srcSet="sait-logo.png 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">IDD - WebDevelopment</Typography>
                            <Typography level="body-sm">Conclusion: 2025</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    Calgary | Canada
                                </Typography>

                            </CardContent>
                        </CardOverflow>
                    </Card>

                </div>

                <div className='single-card'>
                    <Card variant="outlined" sx={{ width: 240, minWidth: 240 }}>
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img
                                    src="anhanguera-logo.png"
                                    srcSet="anhanguera-logo.png 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">Java</Typography>
                            <Typography level="body-sm">Conclusion: 2023</Typography>
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
                            <AspectRatio ratio="2">
                                <img
                                    src="fgv-logo.png"
                                    srcSet="fgv-logo.png 2x"
                                    loading="lazy"
                                    alt=""
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">MBA Project management</Typography>
                            <Typography level="body-sm">Conclusion: 2019</Typography>
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
                            <AspectRatio ratio="2">
                                <img
                                    src="positivo-logo.png"
                                    srcSet="positivo-logo.png 2x"
                                    loading="lazy"
                                    alt="Systems Analysis and Software Development"
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">SA/Software Development</Typography>
                            <Typography level="body-sm">Conclusion: 2017</Typography>
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
                            <AspectRatio ratio="2">
                                <img
                                    src="senai-logo.png"
                                    srcSet="senai-logo.png 2x"
                                    loading="lazy"
                                    alt="Technician in Software Development"
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">Software Development</Typography>
                            <Typography level="body-sm">Conclusion: 2013</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    Quatro Barras | Brazil
                                </Typography>

                            </CardContent>
                        </CardOverflow>
                    </Card>
                </div>

                <div className='single-card'>
                    <Card variant="outlined" sx={{ width: 240, minWidth: 240 }}>
                        <CardOverflow>
                            <AspectRatio ratio="2">
                                <img
                                    src="unimonte-logo.png"
                                    srcSet="unimonte-logo.png 2x"
                                    loading="lazy"
                                    alt="Technician in Software Development"
                                />
                            </AspectRatio>
                        </CardOverflow>
                        <CardContent>
                            <Typography level="title-md">Modern Languages</Typography>
                            <Typography level="body-sm">Conclusion: 2005</Typography>
                        </CardContent>
                        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                            <Divider inset="context" />
                            <CardContent orientation="horizontal">
                                <Typography
                                    level="body-xs"
                                    textColor="text.secondary"
                                    sx={{ fontWeight: 'md' }}
                                >
                                    Santos | Brazil
                                </Typography>

                            </CardContent>
                        </CardOverflow>
                    </Card>
                </div>
            </div>

        </>

    );
};
