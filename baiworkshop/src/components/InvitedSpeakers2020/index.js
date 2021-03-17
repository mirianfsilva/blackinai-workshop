import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Avatar, Card, CardContent, Link} from '@material-ui/core/';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ramon from './../../assets/img/speakers2020/RamonAmaro.jpeg';
import cyril from './../../assets/img/speakers2020/CyrilDiagne.jpg';
import sonia from './../../assets/img/speakers2020/SoniaGuimaraes.png';
import siobahn from './../../assets/img/speakers2020/siobahn.jpg';
import muyinatu from './../../assets/img/speakers2020/MuyinatuBell.jpg';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    image: {
        height: 70,
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        color: theme.palette.primary.dark,
    },
    talktitle: {
        color: theme.palette.secondary.main,
    },
    cardtitle: {
        color: theme.palette.primary.dark,
    },
    chip: {
        margin: theme.spacing(1),
        size: 'large',
        borderRadius: "40px",
    },
    avatarSize: {
        width: theme.spacing(35),
        height: theme.spacing(35),
    },
    card: {
        minHeight: '500px',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    icon: {
        color: theme.palette.primary.dark,
    }
});

const talks = [
    {
        image: ramon,
        talk: 'Talk: Fireside Chat on his new book "Machine Learning, Sociogeny & Race"',
        name: 'Ramon Amaro',
        title: 'Lecturer in Art and Visual Culture of the Global South',
        organization: 'University College London',
        bio: 'Dr Ramon Amaro is Lecturer (Assistant Professor, equiv.) in Art and Visual Culture of the Global South at UCL, History of Art Department. Dr Amaro’s research and writings confront the racial logics of computation, namely in machine learning research, mathematics and the philosophy of engineering. His forthcoming monograph, Machine Learning, Sociogeny and the Substance of Race (Sternberg/MIT, 2021) explores the history of bioepistemics and the impact of racial classification on our contemporary understanding of machine perception and algorithmic decision-making. Dr Amaro completed his PhD in Philosophy at Goldsmiths, University of London, while holding a Masters degree in Sociological Research from the University of Essex and a BSe in Mechanical Engineering from the University of Michigan, Ann Arbor. Dr Amaro has worked as Assistant Editor for the SAGE open access journal Big Data & Society; quality design engineer for General Motors; and programmes manager for the American Society of Mechanical Engineers (ASME). He is a former Research Fellow in Digital Culture at Het Nieuwe Instituut, Rotterdam and former visiting tutor in Media Theory at the Royal Academy of Art, The Hague (KABK). He is also co-founder of Queer Computing Consortium (QCC), which investigates the role of language in computational systems, and its impact on locally embedded community practices.',
        link1: 'https://www.sambarhino.com/',
        link2: 'https://twitter.com/sambarhino',
        link3: 'https://www.linkedin.com/in/ramonamaro/',
        icon1: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
        icon2: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
        icon3: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1.5x"/>,
    },
    {
        image: cyril,
        talk: 'Talk: AI-assisted UIs',
        name: 'Cyril Diagne',
        title: 'Co-founder and CEO of Init ML, former Professor and Head of Media & Interaction Design at ECAL',
        organization: 'Init ML',
        bio: 'Cyril is the co-founder and CEO of Init ML, a startup that brings machine learning research to production through practical uses, such as ClipDrop. Cyril is a former Professor and Head of Media & Interaction Design at ECAL in Lausanne (Switzerland) where he continues to give regular workshops. In 2015, he started a residency at Google Arts & Culture, where he kickstarted the Google Arts Experiments initiative and created multiple machine learning projects such as the viral phenomenon Art Selfie.',
        link1: 'https://initml.co/',
        link2: 'https://twitter.com/cyrildiagne',
        link3: 'https://www.instagram.com/cyril.diagne/',
        icon1: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
        icon2: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
        icon3: <FontAwesomeIcon icon={["fab", "instagram"]} size="1.5x"/>,
    },
    {
        image: sonia,
        talk: 'Talk: My journey, advocacy work to improve diversity in Brazilian Research',
        name: 'Sonia Guimarães',
        title: 'Professor of Physics', 
        organization: 'Instituto Tecnológico de Aeronáutica',
        bio: 'Dr. Guimarães is an Adjunct IV Professor at Aeronautics Institute of Technology – ITA in Portuguese. Dr. Guimarães teaches experimental physics for future electrical, computational, structures for airports, mechanics for airplanes, aeronautics e aero spatial engineers, in their 1st and 2nd years. She used to research about semiconductors to make solar cells and infrared sensors, now she is researching about organic light emitting diodes – OLEDs. The idea is to use OLEDs to make teaching physics more interesting to high school students. She completed her PhD in Semiconductor Devices, at The University of Manchester Institute of Science and Technology, England. She also holds a MS in Applied Physics at São Paulo University – USP in Portuguese, Brazil. She is the counsel founder of afrobras -  a non-governmental initiative, which created Zumbi dos Palmares University, the first Historically Black Brazilian University. She is also the City of São José dos Campos counsel to promote the Racial Equality, in São Paulo State. She is fellow of the Physics Racial Equity Work Group of the Brazilian Physics Association – SBF in Portuguese, and of the of the Black Researchers - ABPN in Portuguese. She travels around several states of Brazil talking about persuading girls to choose STEM as carrier, digital revolution in order to help them to choose their future. Advocating again racism and gender discrimination. Speeches to motivate victims of these crimes to fight for justice. Dr. Guimarães was born and raised in São Paulo, southeast of Brazil.',
        link1: 'https://en.wikipedia.org/wiki/Sonia_Guimarães',
        // link2: '/',
        // link3: '/',
        icon1: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
        // icon2: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
        // icon3: <FontAwesomeIcon icon={["fab", "instagram"]} size="1.5x"/>,
    },
    {
        image: siobahn,
        talk: 'Talk: Understanding the Authorship Footprint in the Age of Disinformation',
        name: 'Siobahn  Day Grady',
        title: 'Assistant Professor, School of Library and Information Science', 
        organization: 'North Carolina Central University',
        bio: 'Siobahn is an Assistant Professor of Information Science/Systems in the School of Library and Information Science at North Carolina Central University, an AAAS IF/THEN Ambassador, a North Carolina Central University OeL Faculty Fellow, and a BlackcomputeHER Fellow. Her work focuses on using machine learning to determine authorship within online social networks and autonomous vehicle fault detection. She also researches STEM identity to broaden participation in computing with her STEM-It-Yourself program. Siobahn holds a Bachelor of Science from Winston-Salem State University,  Masters from North Carolina Central University, and a Doctorate of Philosophy from North Carolina Agricultural and Technical State University. Siobahn is the first woman to graduate with a Ph.D. in Computer Science from the university.',
        link1: 'https://siobahncday.com/',
        link2: 'https://twitter.com/nccuslis',
        link3: 'https://www.facebook.com/nccuslis/',
        icon1: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
        icon2: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
        icon3: <FontAwesomeIcon icon={["fab", "facebook"]} size="1.5x"/>,
    },
    {
        image: muyinatu,
        talk: 'Talk: Ultrasound Image Formation in the Deep Learning Age',
        name: 'Muyinatu Bell',
        title: 'Assistant Professor of Electrical and Computer Engineering, Biomedical Engineering, and Computer Science', 
        organization: 'Johns Hopkins University',
        bio: 'Muyinatu Bell is an Assistant Professor of Electrical and Computer Engineering, Biomedical Engineering, and Computer Science at Johns Hopkins University, where she founded and directs the Photoacoustic and Ultrasonic Systems Engineering (PULSE) Lab. Dr. Bell earned a B.S. degree in Mechanical Engineering (biomedical engineering minor) from Massachusetts Institute of Technology (2006), received a Ph.D. degree in Biomedical Engineering from Duke University (2012), conducted research abroad as a Whitaker International Fellow at the Institute of Cancer Research and Royal Marsden Hospital in the United Kingdom (2009-2010), and completed a postdoctoral fellowship with the Engineering Research Center for Computer-Integrated Surgical Systems and Technology at Johns Hopkins University (2016).  She is Associate Editor-in-Chief of IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control (T-UFFC) and holds patents for short-lag spatial coherence beamforming and photoacoustic-guided surgery. Dr. Bell a recipient of multiple awards and honors, including MIT Technology Review’s Innovator Under 35 Award (2016), the NSF CAREER Award (2018), the NIH Trailblazer Award (2018), the Alfred P. Sloan Research Fellowship (2019), the ORAU Ralph E. Powe Jr. Faculty Enhancement Award (2019), and Maryland’s Outstanding Young Engineer Award (2019). She most recently received the inaugural IEEE UFFC Star Ambassador Lectureship Award (2020) from her IEEE society.',
        link1: 'https://pulselab.jhu.edu/',
        link2: 'https://twitter.com/MuyinatuBell',
        // link3: '/',
        icon1: <FontAwesomeIcon icon={["fa", "link"]} size="1.5x"/>,
        icon2: <FontAwesomeIcon icon={["fab", "twitter"]} size="1.5x"/>,
        // icon3: <FontAwesomeIcon icon={["fab", "instagram"]} size="1.5x"/>,
    }
];

function InvitedSpeakersPage(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h4" marked="center" align="center" className={classes.title}>
                            Black in AI 2020 Invited Talks
                        </Typography>
                    </Grid> 
                    {talks.map((tile) => (
                        <Grid container spacing={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={3}>
                                    <Avatar alt={tile.name} src={tile.image} className={classes.avatarSize} />
                                </Grid>
                                <Grid item xs={12} md={9}>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography className={classes.talktitle} variant="h4" gutterBottom>
                                                {tile.talk}
                                            </Typography>
                                            <Typography className={classes.cardtitle} variant="h4">
                                                {tile.name}
                                            </Typography>
                                            <Link className={classes.icon} href={tile.link1}> {tile.icon1} </Link>
                                            <Link className={classes.icon} href={tile.link2}> {tile.icon2} </Link>
                                            <Link className={classes.icon} href={tile.link3}> {tile.icon3} </Link>
                                            <Typography variant="h5" className={classes.cardtitle} gutterBottom>
                                                {tile.title}
                                            </Typography>
                                            <Typography variant="h5" className={classes.cardtitle} gutterBottom>
                                                {tile.organization} 
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {tile.bio}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>

    );
}

InvitedSpeakersPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InvitedSpeakersPage);
