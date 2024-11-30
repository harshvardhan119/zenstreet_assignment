"use client"

import React,{useState} from 'react';
import { Box, Button, Chip, Typography, Card, Avatar, IconButton ,Modal} from '@mui/material';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAddHome } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaShareAlt } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { VideoCall } from '@mui/icons-material';
import { VoiceChat } from '@mui/icons-material';
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { useRouter } from 'next/navigation'




export default function Content() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
    const copyLink = () => {
      const linkToCopy = "http://www.therapist-swetha.com/profile/view"; 
      navigator.clipboard.writeText(linkToCopy)
        .then(() => {
          alert("Link copied to clipboard!"); 
        })
        .catch((error) => {
          alert("Failed to copy link: " + error); 
        });
    };
   

    
    const router =useRouter();
    const navigateToSession = () => {
      router.push('/session'); 
    };
  
    
    
      
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: '2rem',
        minHeight: '100vh',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        boxShadow: 3,
        borderRadius: '8px',
        
      }}
    >
      {/* Left Section */}
    <div className='lg:fixed lg:w-full'>
      <Box
        sx={{
          width: { xs: '100%', md: '30%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
          gap: '1rem',
          backgroundColor: ' #1F9FE6',
          borderRadius: { xs: '8px', md: '8px 0 0 8px' },
          overflowY: "hidden",
          top: 0, 
          height: '100vh',
          bottom:0,
          position: 'sticky',
         
        }}
        
      >
        <Box sx={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
          <IoMdArrowRoundBack />
          <Typography variant="body2">Back</Typography>
        </Box>

        
        <Card
          sx={{
            width: '100%',
            padding: '1.5rem',
            boxShadow: 3,
            textAlign: 'center',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            height:'400px',
            marginTop:'3rem',
          }}
        >
           <Box
                sx={{
                display: 'flex',           
                justifyContent: 'center',  
                alignItems: 'center', 
                   
                 
                }}
              >
                <Avatar
                  src="/Frame7.png" 
                  alt="Profile Picture"
                 variant="square"
                  sx={{
                   width: '170px',
                   height: '170px',
                   borderRadius: '16px',
                   position: 'relative',
                   boxShadow: 3,
                 }}
                />
                <FaShareAlt style={{position:"relative",bottom:'70px',left:'40px',height:'50px',color:'#1F9FE6'}}  onClick={handleOpen}  />
            </Box>
            <Box
                sx={{
                  display: 'flex',           
                  justifyContent: 'center', 
                  alignItems: 'center',      

                }}
              >
                <Typography
                 variant="h5"
                 fontWeight="bold"
                 sx={{
                   marginBottom: '0.5rem',
                   marginTop: '1rem',
                   position: 'relative',
                   display: 'flex',          
                   alignItems: 'center',      
                   justifyContent: 'center',  
                  }}
                >
                 <FaShareAlt style={{marginRight:'1rem',height:'17px'}}  onClick={handleOpen} />
                 Swetha Varma
                 <RiVerifiedBadgeFill style={{marginLeft:'1rem',height:'23px',color:'#1F9FE6'}}  />
                </Typography>
              </Box>
          <Typography variant="body2" sx={{ marginBottom: '1rem', color: '#555' }}>
            Consultant Clinical Psychologist <br /> 10+ Years of experience
          </Typography>
          <Typography variant="body2" fontWeight="bold" sx={{ marginBottom: '0.5rem' }}>
            Starts at ₹1,200/Session
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '1rem', color: '#555',justifyContent:'center' }} className='flex'>
          <IoLocationOutline style={{position:'relative',top:'2px'}} /> Block A2, Delhi
          </Typography>
          
        </Card>
        
        <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              width: '100%',
              borderRadius: '20px',
              fontWeight: 'bold',
              backgroundColor: 'white',
              
              color:' #1F9FE6;'
            }}
            onClick={navigateToSession}
          >
            Book session
          </Button>
      </Box>
      </div>
      {/* Right Section */}
      <div className='lg:relative lg:l-700 lg:ml-[500px]'>
      <Box sx={{ padding: '2rem', flexGrow: 1 ,paddingTop:'5rem'}}>
        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold',color:'black',fontFamily:'Sans-serif' }}>
          About me
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '1rem', color: '#555' }}>
          Hello, I’m Swetha, a licensed therapist dedicated to guiding individuals through life’s challenges and helping
          them achieve personal growth. I specialize in evidence-based practices.
        </Typography>

        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold', color: 'black', fontFamily: 'Sans-serif' }}>
  Credentials
</Typography>
<ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', color: ' #516E8A' }}>
  <li className='flex'>
    <img src='/Vector.png' alt="icon" style={{ width: '20px', height: '20px', marginRight: '1rem' }} />
    Ph.D. in Clinical Psychology - Harvard University
  </li>
  <li className='flex'>
    <img src='/Vector.png' alt="icon" style={{ width: '20px', height: '20px', marginRight: '1rem' }} />
    M.A. in Counseling - University of California, Berkeley
  </li>
  <li className='flex'>
    <img src='/clarity_license-line.png' alt="icon" style={{ width: '20px', height: '20px', marginRight: '1rem' }} />
    Licensed Professional Counselor (LPC) - State DEF
  </li>
  <li className='flex'>
    <img src='/carbon_certificate.png' alt="icon" style={{ width: '20px', height: '20px', marginRight: '1rem' }} />
    Certified Cognitive Behavioral Therapist (CBT)
  </li>
  <li className='flex'>
    <img src='/Vector (2).png' alt="icon" style={{ width: '20px', height: '20px', marginRight: '1rem' }} />
    Member, American Psychological Association (APA)
  </li>
  <li className='flex'>
    <img src='/Vector (1).png' alt="icon" style={{ width: '20px', height: '20px', marginRight: '1rem' }} />
    10+ years of experience in individual and group therapy
  </li>
</ul>
<Typography 
  variant="h6" 
  sx={{ marginBottom: '1rem', color: 'black', fontWeight: 'bold' }}
>
  Available on
</Typography>
<Box 
  sx={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}
>
  <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '100px', 
      height: '100px', 
      backgroundColor: '#e3f2fd', 
      borderRadius: '8px',
    }}
  >
    <VideoCall sx={{ fontSize: '2rem', color: '#2196f3' }} />
    <Typography 
      sx={{ 
        marginTop: '0.5rem', 
        fontSize: '0.9rem', 
        fontWeight: 'bold', 
        color: '#2196f3' 
      }}
    >
      Video call
    </Typography>
  </Box>
  <Box 
    sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      width: '100px', 
      height: '100px', 
      backgroundColor: '#e3f2fd', 
      borderRadius: '8px',
    }}
  >
    <FaPhoneAlt style={{ fontSize: '2rem', color: '#2196f3' }} />
    <Typography 
      sx={{ 
        marginTop: '0.5rem', 
        fontSize: '0.9rem', 
        fontWeight: 'bold', 
        color: '#2196f3' 
      }}
    >
      Voice call
    </Typography>
  </Box>
</Box>


        <Typography variant="h6" sx={{ marginBottom: '1rem',  color:'black', fontWeight: 'bold' }}>
          I offer therapy for
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['Stress Management', 'Relationship Skills', 'Anxiety Reduction', 'Trauma Healing', 'Depression Relief'].map(
            (therapy) => (
              <Chip
                key={therapy}
                label={therapy}
                sx={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold',borderBlockWidth:'2px' ,border: '2px solid blue',
                  borderRadius: '20px', }}
              />
            )
          )}
        </Box>
        <Box sx={{ flexGrow: 1 ,paddingTop:'2rem'}}>
        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold',color:'black',fontFamily:'Sans-serif' }}>
          Languages
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '1rem', color: '#555' }}>
          Hindi,English
        </Typography></Box>

        <Typography variant="h6" sx={{ marginTop: '2rem',color:'black', marginBottom: '1rem', fontWeight: 'bold' }}>
          Client Testimonials
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <Card sx={{ flex: 1, padding: '1rem', backgroundColor: '#f5f5f5',width:"30px" }}>
          <p className='flex'>
            <img src='/Vector (3).png' alt="icon" style={{ width: '20px', height: '20px', marginRight: '0rem' }} />
            <img src='/Vector (3).png' alt="icon" style={{ width: '20px', height: '20px', marginRight: '1rem' }} /></p>
            <Typography variant="body2">
             
              “The guidance received helped me overcome my struggles.”
            </Typography>
          </Card>
          <Card sx={{ flex: 1, padding: '1rem', backgroundColor: '#f5f5f5',width:"30px" }}>
          <p className='flex'>
            <img src='/Vector (3).png' alt="icon" style={{ width: '20px', height: '20px', marginRight: '0rem' }} />
            <img src='/Vector (3).png' alt="icon" style={{ width: '20px', height: '20px', marginRight: '1rem' }} /></p>
            <Typography variant="body2">
            
              “They helped me build confidence and find my purpose.”
            </Typography>
          </Card>
        </Box>
      </Box></div>


      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '8px',
            width: '300px',
            boxShadow: 24,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              marginBottom: '1rem',
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
            }}
          >
            Share
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              marginBottom: '1rem',
            }}
          >
            <Box sx={{ textAlign: 'center',color: 'black' }}>
              <FaFacebook style={{ fontSize: '24px', color: 'black' }} />
              <Typography variant="body2">Facebook</Typography>
            </Box>
            <Box sx={{ textAlign: 'center',color: 'black' }}>
              <FaWhatsapp style={{ fontSize: '24px', color: 'black' }} />
              <Typography variant="body2">WhatsApp</Typography>
            </Box>
            <Box sx={{ textAlign: 'center',color: 'black' }}>
              <RiTwitterXLine style={{ fontSize: '24px', color: 'black' }} />
              <Typography variant="body2">Twitter</Typography>
            </Box>
            <Box sx={{ textAlign: 'center',color: 'black' }}>
              <MdOutlineMail style={{ fontSize: '24px', color: 'black' }} />
              <Typography variant="body2">Mail</Typography>
            </Box>
            
          </Box>
          <Typography
            variant="h6"
            sx={{
              marginBottom: '1rem',
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
            }}
          >
            Page Link
          </Typography>
          <Box
              sx={{
                backgroundColor: '#f5f5f5',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                flex: 1,
                marginRight: '1rem',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  color: '#555',
                }}
              >
                http://www.therapist-swetha.com/profile/view
              </Typography>
            </Box>
            <Button variant="outlined" sx={{ textTransform: 'none' }} onClick={copyLink}>
              Copy Link
            </Button>
          
        </Box>
      </Modal>
    </Box>
  );
}
