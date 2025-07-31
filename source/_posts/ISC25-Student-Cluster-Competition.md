---
title: 'ISC25: Student Cluster Competition'
categories:
  - SCC
tags:
  - ISC25
  - NTHU
toc: true
author: Catking14
copyright: Please cite the author and source when sharing. Thanks for your support!
date: 2025-07-31 22:34:55
---


![](/images/isc25/scc_award.jpg)

As one of the world's largest student cluster competiton, the SCC in ISC has been a familiar competition for the NTHU SCC team. With that said, it's my first time attending this conference, and not as a team member, but a student coach. Similar to previous student cluster competitions, each team will need to run benchmarks, application tasks, and a hidden task under power limit in 3 day competition. This year, the benchmark includes HPL, IO500, and HPCG, while the application tasks are Code Saturne, a computational fluid dynamics (CFD) solver, SeisSol, a wave propagation simulator, Llama 3.1 8B LoRA fine-tuning, and OpenMX, an application for nano-scale material simulations.

Different from SC, the student cluster competition in ISC is not 24-hour nonstop. We will have 2 extra days to build and test our cluster before the competition, and the competition holds from 9:00 AM to 8:00 PM each day. The competition ends at 1:30 PM last day, which means it actually only has two and a half days. The task each day are already assigned by the committee. First day will start with all benchmarks, followed by Code Saturne, Seissol, and Llama at the second day, and ends with OpenMX and a mystery application, which turned out to be LAMMPS, a well known molecular dynamics simulator.

# Background of Our Team

Our team composed of all new members. They have no experience about onsite international student cluster competitions. However, their previous performance on HPC-AI online competition and HiPAC national competition are outstanding. This year,  we've got member familiar with system and architecture, member good at coding, and other members in different major. Having teamed up over an year ago, they've already built strong teamwork through out these days. They might be newcomers, but they are not rookies.

The competition this year has grown up to 10 teams compare to 7 teams last year. This makes it crucial to choose the hardware, which will eventually become a major key to win. This year, we are grateful to be supported by Gigabyte Technology, who offered us their top-end servers. Our GPU server got 8 H200 with plenty of PCIe U.2 slots. All of our servers are equipped with AMD EPYC processors and over a terabyte of memory. With the aid of Infiniband NDR cables and switch, we have lightning fast inter-connection between nodes. Under the limit of 6000w in total, we decide to bring up a GPU node with two CPU nodes.

# Before the Competition Starts

Fully prepared team members, top-end hardwares, and our experience from previous competitions, we aim for the highest linpack and first place this year. With that said, things didn't work well at the very beginning this time. We booked the wrong flight that we landed at Hamburg just after the cluster building session starts, which took us an hour to get to the conference hall. What's worse, we were blocked outside the hall for almost an hour since we didn't know where the entrance for competition members was. The conference hadn't started during cluster building session, which is two days before conference. We found the entrance by asking three different counters at last.

The cluster building was great. Almost everything works just as expected, though which are not expected works as what they were. We've tried to use different network topology without any testing in advance, and it turns out to be a total failure. What truly surprise us is that we didn't get our rack when we start to build our machine, so every node is just scattering on the floor, with foam from the box under them. It's really a weird scene to see our cluster just "wide open". This circumstance almost stay through the entire cluster building session, which we've just about to make the decision that whether we are going to just leave them there on the floor. Our rack got to our booth at about 3 hours before the cluster building session ends. After a deep discussion with the unwillingness to move those heavy servers on the rack, our cluster still got its "suit" at the end.

![](/images/isc25/DSC_4676.jpg)

# Running with Time

The benchmarking at the first day was smooth. We've got our first result very quickly, which was before noon (if I remembered correctly). After that, we've spent quite a long time trying to tune the HPL and IO500 scores. HPL is straightforward that if you can bring higher watts and more GPUs, you'll have higher score. Our goal is to lower every other components' power usage for the GPUs to fully reveal their power. As for IO500, our `mdadm` encountered some error that we could only make it run with 2 ssds without crash. We've only got a reasonable score for these 2 ssds. However, which turned out to be acceptable because no one could beat the first place.

The application on day two is a little bit frustrating. Our SeisSol spent a large amount of time for trying to run with GPU, and our Llama fine-tuning are far behind other teams, no matter on throughput or accuracy. Our plan for this day had quickly become getting results on every task. OpenMX has been postponed to the last day for unknown reason. Due to that, we've gotten our results very fast this day and were able to try some other attempts. It's a more leisure day compare to yesterday. The third day turns out to be the most challenging. The hidden application is Lammps, a well known simulator which is also the task is ISC21. I thought this would be an easy task for everyone since Lammps is well optimized for GPU and well maintained. The application itself is pretty mature in my understanding. However, we've kept failing on running given testcase on GPU, which wasted a lot of time for OpenMX and waiting for CPU simulation to finish. We submit the result literally at the last second of the competition, where our Lammps finish its simulation 2 minutes before that. The errors when using GPU version are totally unexpected and unprecedented. Quite confusing even till now.

![](/images/isc25/DSC_4713.jpg)

# What They Achieved

Under quite dramatic two and a half days of competition, our team won **the second place** this year! I'm very proud of them that they've finished every single task this time, and the outcome of each task is really way better than they expected. With that said, the first place this year, Tsing Hua University, is a huge wall in front of us. They almost got the top score on every tasks with enormous gap between us. Their IO500 has got about 60 times higher than us using their own developed file system **SuperFS**. I've seen they modify the MLPerf benchmark for multi-node inference for unsupported StableDiffusion-XL in SC24 last time, but this time, they've brought the game to a whole different level. It's truly challenging to defeat them, and really curious about how they learn and train these team members. No matter what, I'm glad for our team members to have this prize for our team. The competition is never an end, but a beginning to the vast and exciting world of HPC. Cheer for them!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Glad to be part of this wonderful journey! As a student coach this time, it&#39;s cheerful to see them achieving the greatness once again. Cheer for <a href="https://twitter.com/NTHUSCC?ref_src=twsrc%5Etfw">@NTHUSCC</a>! <a href="https://t.co/5xG0dR4oOL">https://t.co/5xG0dR4oOL</a></p>&mdash; Catking (@Catking_14) <a href="https://twitter.com/Catking_14/status/1942949052171342086?ref_src=twsrc%5Etfw">July 9, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


Read more from:
- [ISC25 SCC Official Website](https://isc-hpc.com/program/student-cluster-competition/)
- [NTHU Official Facebook](https://www.facebook.com/nthu.tw/posts/pfbid025ehUJS7qbTAAJxmAKNzFEM2HdHwm3AQPcUpJ1n1a94SaxVrQ3mzN2Q5cbT2J2MV4l)
- [Giga Computing X](https://x.com/GigaComputing/status/1941096904093266389?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1942949052171342086%7Ctwgr%5Ecfb333486a2e69a1d8a8a816f3537f945977d269%7Ctwcon%5Es3_&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Furl%3Dhttps%3A%2F%2Ftwitter.com%2FCatking_14%2Fstatus%2F1942949052171342086)