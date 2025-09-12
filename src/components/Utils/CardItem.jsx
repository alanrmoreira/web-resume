import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

/**
 * Props:
 * - link: string (URL)
 * - logo: string (nome do arquivo dentro de src/assets, ex.: "det-logo.png")
 * - itemName: string
 * - itemDate: string
 * - itemDateMessage: string
 * - city: string
 * - itemSize: string | number (ex.: "16/9", "4/3", 1). Default "16/9"
 */
export default function CardItem(params) {
    const {
        link,
        logo,
        itemName,
        itemDate,
        itemDateMessage,
        city,
        itemSize = '16/9',
    } = params;

    // Tenta resolver a imagem a partir de src/assets via webpack
    let logoSrc = '';
    try {
        // isto cria um "context" e inclui os arquivos de src/assets no bundle
        logoSrc = require(`../../assets/${logo}`);
    } catch (e) {
        // fallback (caso o arquivo não exista em src/assets)
        logoSrc = `${process.env.PUBLIC_URL}/assets/${logo}`;
    }

    return (
        <div className="single-card">
            <a href={link} target="_blank" className="cardLink" rel="noopener noreferrer">
                <Card variant="outlined" sx={{ width: 240, minWidth: 240 }}>
                    <CardOverflow>
                        <AspectRatio ratio={itemSize}>
                            <img
                                src={logoSrc}
                                loading="lazy"
                                alt={itemName || 'Certification'}
                            />
                        </AspectRatio>
                    </CardOverflow>

                    <CardContent>
                        <Typography level="title-md">{itemName}</Typography>
                        {itemDate && (
                            <Typography level="body-sm">
                                {itemDateMessage}: {itemDate}
                            </Typography>
                        )}
                    </CardContent>

                    <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
                        <Divider inset="context" />
                        <CardContent orientation="horizontal">
                            <Typography
                                level="body-xs"
                                textColor="text.secondary"
                                sx={{ fontWeight: 'md' }}
                            >
                                {city}
                            </Typography>
                        </CardContent>
                    </CardOverflow>
                </Card>
            </a>
        </div>
    );
}