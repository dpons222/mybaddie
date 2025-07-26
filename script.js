{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('date-form').addEventListener('submit', function (e) \{\
  e.preventDefault();\
\
  const day = document.getElementById('day').value;\
  const time = document.getElementById('time').value;\
  const activity = document.getElementById('activity').value;\
\
  console.log(`\uc0\u55356 \u57144  She picked: $\{day\}, $\{time\}, $\{activity\}`);\
  alert(`Aww you picked: $\{day\}, $\{time\}, $\{activity\} \uc0\u55357 \u56470 `);\
\
  document.getElementById('date-form').classList.add('hidden');\
  document.getElementById('confirmation').classList.remove('hidden');\
\});\
}