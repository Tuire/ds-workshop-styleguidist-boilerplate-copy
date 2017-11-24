import React from "react";
import ReactDOM from "react-dom";

import { Teaser } from "../lib/my-awesome-library";

const data = {
  item: [
    {
      title: "If your CloudFormation deployments are failing, this is why",
      link:
        "https://www.nordcloud.com/tech-blog/if-your-cloud-deployments-are-failing-this-is-why",
      description:
        '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/if-your-cloud-deployments-are-failing-this-is-why" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/pexels-code.jpeg?t=1511430893044" alt="If your CloudFormation deployments are failing, this is why" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>Update [16:00UTC]:&nbsp;<span style="background-color: transparent;">AWS were quick to release a fix (<span style="font-family: \'courier new\', courier;">aws-cfn-bootstrap-1.4-26</span>) and <span style="font-family: \'courier new\', courier;">-25</span> is still in the yum repositories. Unless you were unlucky and froze your environment today, the problem should solve itself.</span></p>  \n<p>The latest version of <span style="font-family: \'courier new\', courier;">aws-cfn-bootstrap</span> package <span style="font-family: \'courier new\', courier;">aws-cfn-bootstrap-1.4-25.17.amzn1.noarch</span> that was signed November 2 around 21:00 UTC changed how <span style="font-family: \'courier new\', courier;">cfn-signal</span> works. <span style="font-family: \'courier new\', courier;">cfn-signal</span> now picks up the the instance profile role’s api keys and try to sign the request by default. This causes the signal to fail if the instances IAM role does not have <span style="font-family: \'courier new\', courier;">cloudformation:SignalResource</span> permission.</p>',
      encoded: {
        __prefix: "content",
        __text:
          '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/if-your-cloud-deployments-are-failing-this-is-why" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/pexels-code.jpeg?t=1511430893044" alt="If your CloudFormation deployments are failing, this is why" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>Update [16:00UTC]:&nbsp;<span style="background-color: transparent;">AWS were quick to release a fix (<span style="font-family: \'courier new\', courier;">aws-cfn-bootstrap-1.4-26</span>) and <span style="font-family: \'courier new\', courier;">-25</span> is still in the yum repositories. Unless you were unlucky and froze your environment today, the problem should solve itself.</span></p>  \n<p>The latest version of <span style="font-family: \'courier new\', courier;">aws-cfn-bootstrap</span> package <span style="font-family: \'courier new\', courier;">aws-cfn-bootstrap-1.4-25.17.amzn1.noarch</span> that was signed November 2 around 21:00 UTC changed how <span style="font-family: \'courier new\', courier;">cfn-signal</span> works. <span style="font-family: \'courier new\', courier;">cfn-signal</span> now picks up the the instance profile role’s api keys and try to sign the request by default. This causes the signal to fail if the instances IAM role does not have <span style="font-family: \'courier new\', courier;">cloudformation:SignalResource</span> permission.</p>    \n<img src="https://track.hubspot.com/__ptq.gif?a=453090&k=14&r=https%3A%2F%2Fwww.nordcloud.com%2Ftech-blog%2Fif-your-cloud-deployments-are-failing-this-is-why&bu=https%253A%252F%252Fwww.nordcloud.com%252Ftech-blog&bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">'
      },
      category: ["CloudFormation", "Deployment", "cfn-signal"],
      pubDate: "Fri, 03 Nov 2017 13:49:40 GMT",
      author: "martin.kaberg@nordcloud.com (Martin Kåberg)",
      guid:
        "https://www.nordcloud.com/tech-blog/if-your-cloud-deployments-are-failing-this-is-why",
      date: {
        __prefix: "dc",
        __text: "2017-11-03T13:49:40Z"
      }
    },
    {
      title:
        "Keeping Up With The Latest Skills: AWS IoT, Polly, And Rekognition",
      link:
        "https://www.nordcloud.com/tech-blog/keeping-up-skills-with-aws-iot-polly-and-rekognition",
      description:
        '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/keeping-up-skills-with-aws-iot-polly-and-rekognition" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/AAIA_wDGAAAAAQAAAAAAAAvHAAAAJGYxNmRkOWE3LWY4YTQtNDVkMC1hMmYyLWFlOTY2MDU3ZTJhYw.jpg?t=1511430893044" alt="Keeping Up With The Latest Skills: AWS IoT, Polly, And Rekognition" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p><span>Recently, I secured a number of AWS IoT Buttons for our office to play with and wanted to try to see how easy they would be to set-up and use in various mock-up applications.&nbsp;In the spirit of playing around with the buttons and keeping up my technical skills related to the AWS platform, I decided to make a small proof-of-concept project around them by collecting some old Android devices I had lying around, and various bits and pieces of AWS services such as Image recognition.&nbsp;</span></p>',
      encoded: {
        __prefix: "content",
        __text:
          '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/keeping-up-skills-with-aws-iot-polly-and-rekognition" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/AAIA_wDGAAAAAQAAAAAAAAvHAAAAJGYxNmRkOWE3LWY4YTQtNDVkMC1hMmYyLWFlOTY2MDU3ZTJhYw.jpg?t=1511430893044" alt="Keeping Up With The Latest Skills: AWS IoT, Polly, And Rekognition" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p><span>Recently, I secured a number of AWS IoT Buttons for our office to play with and wanted to try to see how easy they would be to set-up and use in various mock-up applications.&nbsp;In the spirit of playing around with the buttons and keeping up my technical skills related to the AWS platform, I decided to make a small proof-of-concept project around them by collecting some old Android devices I had lying around, and various bits and pieces of AWS services such as Image recognition.&nbsp;</span></p>    \n<img src="https://track.hubspot.com/__ptq.gif?a=453090&k=14&r=https%3A%2F%2Fwww.nordcloud.com%2Ftech-blog%2Fkeeping-up-skills-with-aws-iot-polly-and-rekognition&bu=https%253A%252F%252Fwww.nordcloud.com%252Ftech-blog&bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">'
      },
      category: [
        "AWS",
        "IoT",
        "AWS Lambda",
        "CloudFormation",
        "Android",
        "AWS Rekognition"
      ],
      pubDate: "Tue, 24 Oct 2017 13:20:05 GMT",
      author: "pasi.katajainen@nordcloud.fi (Pasi Katajainen)",
      guid:
        "https://www.nordcloud.com/tech-blog/keeping-up-skills-with-aws-iot-polly-and-rekognition",
      date: {
        __prefix: "dc",
        __text: "2017-10-24T13:20:05Z"
      }
    },
    {
      title: "How To Create Stateful Clusters In AWS",
      link:
        "https://www.nordcloud.com/tech-blog/how-to-create-stateful-clusters-in-aws",
      description:
        '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/how-to-create-stateful-clusters-in-aws" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/2015_Headers/nc-cloud-start-header.jpg?t=1511430893044" alt="nc-cloud-start-header.jpg" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p><span style="background-color: transparent;">With stateful clusters, the idea is to create storage and network interface before a VM is created. The storage and ENI are then associated with the VM on start up.</span></p>',
      encoded: {
        __prefix: "content",
        __text:
          '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/how-to-create-stateful-clusters-in-aws" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/2015_Headers/nc-cloud-start-header.jpg?t=1511430893044" alt="nc-cloud-start-header.jpg" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p><span style="background-color: transparent;">With stateful clusters, the idea is to create storage and network interface before a VM is created. The storage and ENI are then associated with the VM on start up.</span></p>    \n<img src="https://track.hubspot.com/__ptq.gif?a=453090&k=14&r=https%3A%2F%2Fwww.nordcloud.com%2Ftech-blog%2Fhow-to-create-stateful-clusters-in-aws&bu=https%253A%252F%252Fwww.nordcloud.com%252Ftech-blog&bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">'
      },
      pubDate: "Mon, 11 Sep 2017 09:49:03 GMT",
      author: "martin.kaberg@nordcloud.com (Martin Kåberg)",
      guid:
        "https://www.nordcloud.com/tech-blog/how-to-create-stateful-clusters-in-aws",
      date: {
        __prefix: "dc",
        __text: "2017-09-11T09:49:03Z"
      }
    },
    {
      title: "Microsoft Azure Has Launched Two New Sets of Virtual Machines",
      link:
        "https://www.nordcloud.com/tech-blog/microsoft-azure-has-launched-two-new-sets-of-virtual-machines",
      description:
        '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/microsoft-azure-has-launched-two-new-sets-of-virtual-machines" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/pexels-photo-109678-min.jpeg?t=1511430893044" alt="Microsoft Azure Has Launched Two New Sets of Virtual Machines" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>Last week, Microsoft launched two new series of virtual machines,&nbsp;<span>the D_v3 and the E_v3 which are follow-ups to the&nbsp;<span>D_v2-Series. This launch introduces new sizes that use Hyper-Threading Technology (running on Intel&nbsp;<span>Broadwell E5-2673 v4 2.3GHz processor, and the Intel® Haswell 2.4 GHz E5-2673 v3)</span>, shifting from physical cores to virtual CPU\'s (vCPU). They will also be priced 28% lower than their predecessors.&nbsp;</span></span></p>',
      encoded: {
        __prefix: "content",
        __text:
          '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/microsoft-azure-has-launched-two-new-sets-of-virtual-machines" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/pexels-photo-109678-min.jpeg?t=1511430893044" alt="Microsoft Azure Has Launched Two New Sets of Virtual Machines" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>Last week, Microsoft launched two new series of virtual machines,&nbsp;<span>the D_v3 and the E_v3 which are follow-ups to the&nbsp;<span>D_v2-Series. This launch introduces new sizes that use Hyper-Threading Technology (running on Intel&nbsp;<span>Broadwell E5-2673 v4 2.3GHz processor, and the Intel® Haswell 2.4 GHz E5-2673 v3)</span>, shifting from physical cores to virtual CPU\'s (vCPU). They will also be priced 28% lower than their predecessors.&nbsp;</span></span></p>    \n<img src="https://track.hubspot.com/__ptq.gif?a=453090&k=14&r=https%3A%2F%2Fwww.nordcloud.com%2Ftech-blog%2Fmicrosoft-azure-has-launched-two-new-sets-of-virtual-machines&bu=https%253A%252F%252Fwww.nordcloud.com%252Ftech-blog&bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">'
      },
      category: ["Azure", "VM"],
      pubDate: "Mon, 31 Jul 2017 15:44:11 GMT",
      author: "jessica.looke@nordcloud.com (Jessica Looke)",
      guid:
        "https://www.nordcloud.com/tech-blog/microsoft-azure-has-launched-two-new-sets-of-virtual-machines",
      date: {
        __prefix: "dc",
        __text: "2017-07-31T15:44:11Z"
      }
    },
    {
      title: "AWS Lambda@Edge: Running Lambda Code In Edge Locations",
      link:
        "https://www.nordcloud.com/tech-blog/aws-lambdaedge-running-lambda-code-in-edge-locations",
      description:
        '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/aws-lambdaedge-running-lambda-code-in-edge-locations" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/pexels-photo-152536-min.jpeg?t=1511430893044" alt="AWS Lambda@Edge: Running Lambda Code In Edge Locations" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>AWS has <a href="http://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html">recently introduced</a> Lambda@Edge&nbsp;which gives you the possibility to run Lambda code in Edge locations. What does it mean for CloudFront users and what can you achieve with it?</p>',
      encoded: {
        __prefix: "content",
        __text:
          '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/aws-lambdaedge-running-lambda-code-in-edge-locations" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/pexels-photo-152536-min.jpeg?t=1511430893044" alt="AWS Lambda@Edge: Running Lambda Code In Edge Locations" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>AWS has <a href="http://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html">recently introduced</a> Lambda@Edge&nbsp;which gives you the possibility to run Lambda code in Edge locations. What does it mean for CloudFront users and what can you achieve with it?</p>    \n<img src="https://track.hubspot.com/__ptq.gif?a=453090&k=14&r=https%3A%2F%2Fwww.nordcloud.com%2Ftech-blog%2Faws-lambdaedge-running-lambda-code-in-edge-locations&bu=https%253A%252F%252Fwww.nordcloud.com%252Ftech-blog&bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">'
      },
      category: ["AWS", "Code", "AWS Lambda"],
      pubDate: "Thu, 27 Jul 2017 08:53:07 GMT",
      guid:
        "https://www.nordcloud.com/tech-blog/aws-lambdaedge-running-lambda-code-in-edge-locations",
      date: {
        __prefix: "dc",
        __text: "2017-07-27T08:53:07Z"
      },
      creator: {
        __prefix: "dc",
        __text: "Maciej Piechowiak"
      }
    },
    {
      title: "Update: A new generation of EC2 instances from AWS",
      link:
        "https://www.nordcloud.com/tech-blog/a-new-generation-of-ec2-instances-from-aws",
      description:
        '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/a-new-generation-of-ec2-instances-from-aws" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/pexels-photo-309839.jpeg?t=1511430893044" alt="Update: A new generation of EC2 instances from AWS" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>AWS announced yesterday they had released a new set of EC2 GPU-powered instances specifically geared towards graphic intensive applications. G3 applications can now be <a href="https://aws.amazon.com/about-aws/whats-new/2017/07/introducing-amazon-ec2-g3-instances-the-next-generation-of-gpu-powered-instances-for-graphics-intensive-applications/"><strong>launched to acquire</strong></a> \'a powerful combinaiton of&nbsp;<span>of GPU, CPU, and host memory for workloads such as 3D rendering, 3D visualizations, graphics-intensive remote workstations, video encoding, and virtual reality applications.\'</span></p>',
      encoded: {
        __prefix: "content",
        __text:
          '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/a-new-generation-of-ec2-instances-from-aws" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/pexels-photo-309839.jpeg?t=1511430893044" alt="Update: A new generation of EC2 instances from AWS" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>AWS announced yesterday they had released a new set of EC2 GPU-powered instances specifically geared towards graphic intensive applications. G3 applications can now be <a href="https://aws.amazon.com/about-aws/whats-new/2017/07/introducing-amazon-ec2-g3-instances-the-next-generation-of-gpu-powered-instances-for-graphics-intensive-applications/"><strong>launched to acquire</strong></a> \'a powerful combinaiton of&nbsp;<span>of GPU, CPU, and host memory for workloads such as 3D rendering, 3D visualizations, graphics-intensive remote workstations, video encoding, and virtual reality applications.\'</span></p>    \n<img src="https://track.hubspot.com/__ptq.gif?a=453090&k=14&r=https%3A%2F%2Fwww.nordcloud.com%2Ftech-blog%2Fa-new-generation-of-ec2-instances-from-aws&bu=https%253A%252F%252Fwww.nordcloud.com%252Ftech-blog&bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">'
      },
      category: ["AWS", "AWS EC2"],
      pubDate: "Fri, 14 Jul 2017 10:45:23 GMT",
      author: "jessica.looke@nordcloud.com (Jessica Looke)",
      guid:
        "https://www.nordcloud.com/tech-blog/a-new-generation-of-ec2-instances-from-aws",
      date: {
        __prefix: "dc",
        __text: "2017-07-14T10:45:23Z"
      }
    },
    {
      title: "Design AWS API access with care - CASE ONELOGIN",
      link:
        "https://www.nordcloud.com/tech-blog/design-aws-api-access-with-care-case-onelogin",
      description:
        '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/design-aws-api-access-with-care-case-onelogin" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/Blog%20images%202017/StockSnap_NFN9OD6EMR-990641-edited-105579-edited.jpg?t=1511430893044" alt="Design AWS API access with care - CASE ONELOGIN" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>The recent Onelogin breach, shown here in their <a href="https://www.onelogin.com/blog/may-31-2017-security-incident">official blogpost</a>&nbsp;highlighted to&nbsp;us that account access permissions can be devastating if not done right.</p>',
      encoded: {
        __prefix: "content",
        __text:
          '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/design-aws-api-access-with-care-case-onelogin" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/Blog%20images%202017/StockSnap_NFN9OD6EMR-990641-edited-105579-edited.jpg?t=1511430893044" alt="Design AWS API access with care - CASE ONELOGIN" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>The recent Onelogin breach, shown here in their <a href="https://www.onelogin.com/blog/may-31-2017-security-incident">official blogpost</a>&nbsp;highlighted to&nbsp;us that account access permissions can be devastating if not done right.</p>    \n<img src="https://track.hubspot.com/__ptq.gif?a=453090&k=14&r=https%3A%2F%2Fwww.nordcloud.com%2Ftech-blog%2Fdesign-aws-api-access-with-care-case-onelogin&bu=https%253A%252F%252Fwww.nordcloud.com%252Ftech-blog&bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">'
      },
      category: ["Security", "Onelogin"],
      pubDate: "Mon, 05 Jun 2017 10:23:15 GMT",
      author: "hamin.mousavi@nordcloud.se (Hamin Mousavi)",
      guid:
        "https://www.nordcloud.com/tech-blog/design-aws-api-access-with-care-case-onelogin",
      date: {
        __prefix: "dc",
        __text: "2017-06-05T10:23:15Z"
      }
    },
    {
      title:
        "Run Lambdas Functions from Slack for fun and profit with Opsidian.ai",
      link:
        "https://www.nordcloud.com/tech-blog/trigger-lambda-functions-from-slack-with-opsidian.ai",
      description:
        '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/trigger-lambda-functions-from-slack-with-opsidian.ai" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/2015_Headers/kumamoto-japan-aso-cloud-45848.jpeg?t=1511430893044" alt="Run Lambdas Functions from Slack for fun and profit with Opsidian.ai" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p class="graf graf--p">For over a year now we have seen the rise of chatbots all over the planet and in many different industries. The same trend is being seen in the Cloud and IT market, especially since we\'ve been working with Amazon Web Services very closely. Last year, there has been the "AWS Serverless Chatbot" competition where one tool&nbsp;<a href="http://blog.opsidian.ai/chatops-aws-serverless-chatbot-contest/">left the jury absulutely breathless: <strong>opsidian.ai</strong></a>.</p> \n<p class="graf graf--p">At Nordcloud, we are working closely with the team at Opsidian.ai to get the latest and best out of using chatbots for both our customers and our own operations teams. Especially in the context of our Managed Cloud Service, this is a highly relevant aspect. We integrate with our customers on a deeper level and partner more closely through the use of chatbots and the related features and functions. In this blog post we want to describe some of these aspects and encourage all of you to take a look at opsidian.ai in the near future.&nbsp;</p> \n<p class="graf graf--p">&nbsp;</p> \n<h2 class="graf graf--p">Enabling real ChatOps</h2> \n<p class="graf graf--p"><span>Opsidian helps you monitor and manage your AWS Infrastructure from Slack. Opsidian is a part of increasingly popular trend, called ChatOps. ChatOps is about bringing your DevOps work to your chats and conversations within a team. You can, for example, deploy code, monitor servers, close issues in a bug tracker just by talking to a chatbot, which understands natural language or special commands.&nbsp;<span>We have recognized that trend and Opsidian.ai was born - </span><span>an AWS chatbot developed jointly with Nordcloud to manage AWS environments directly from Slack channels.</span></span></p> \n<p class="graf graf--p"><span style="background-color: transparent;">With Opsidian.ai you can bring your everyday cloud mananagement and monitoring tasks to where you team is - a Slack channel. This way, team members gain a better visibility into the discussed items and accelerate change by having a common view on a problem.</span></p>',
      encoded: {
        __prefix: "content",
        __text:
          '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/trigger-lambda-functions-from-slack-with-opsidian.ai" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/2015_Headers/kumamoto-japan-aso-cloud-45848.jpeg?t=1511430893044" alt="Run Lambdas Functions from Slack for fun and profit with Opsidian.ai" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p class="graf graf--p">For over a year now we have seen the rise of chatbots all over the planet and in many different industries. The same trend is being seen in the Cloud and IT market, especially since we\'ve been working with Amazon Web Services very closely. Last year, there has been the "AWS Serverless Chatbot" competition where one tool&nbsp;<a href="http://blog.opsidian.ai/chatops-aws-serverless-chatbot-contest/">left the jury absulutely breathless: <strong>opsidian.ai</strong></a>.</p> \n<p class="graf graf--p">At Nordcloud, we are working closely with the team at Opsidian.ai to get the latest and best out of using chatbots for both our customers and our own operations teams. Especially in the context of our Managed Cloud Service, this is a highly relevant aspect. We integrate with our customers on a deeper level and partner more closely through the use of chatbots and the related features and functions. In this blog post we want to describe some of these aspects and encourage all of you to take a look at opsidian.ai in the near future.&nbsp;</p> \n<p class="graf graf--p">&nbsp;</p> \n<h2 class="graf graf--p">Enabling real ChatOps</h2> \n<p class="graf graf--p"><span>Opsidian helps you monitor and manage your AWS Infrastructure from Slack. Opsidian is a part of increasingly popular trend, called ChatOps. ChatOps is about bringing your DevOps work to your chats and conversations within a team. You can, for example, deploy code, monitor servers, close issues in a bug tracker just by talking to a chatbot, which understands natural language or special commands.&nbsp;<span>We have recognized that trend and Opsidian.ai was born - </span><span>an AWS chatbot developed jointly with Nordcloud to manage AWS environments directly from Slack channels.</span></span></p> \n<p class="graf graf--p"><span style="background-color: transparent;">With Opsidian.ai you can bring your everyday cloud mananagement and monitoring tasks to where you team is - a Slack channel. This way, team members gain a better visibility into the discussed items and accelerate change by having a common view on a problem.</span></p>    \n<img src="https://track.hubspot.com/__ptq.gif?a=453090&k=14&r=https%3A%2F%2Fwww.nordcloud.com%2Ftech-blog%2Ftrigger-lambda-functions-from-slack-with-opsidian.ai&bu=https%253A%252F%252Fwww.nordcloud.com%252Ftech-blog&bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">'
      },
      category: ["AWS Lambda", "ChatOps", "Slack"],
      pubDate: "Tue, 16 May 2017 08:44:19 GMT",
      author: "dariusz.dwornikowski@nordcloud.com (Dariusz Dwornikowski)",
      guid:
        "https://www.nordcloud.com/tech-blog/trigger-lambda-functions-from-slack-with-opsidian.ai",
      date: {
        __prefix: "dc",
        __text: "2017-05-16T08:44:19Z"
      }
    },
    {
      title: "Considering using S3 file replication? Read this first.",
      link:
        "https://www.nordcloud.com/tech-blog/considering-using-s3-file-replication-read-this-first",
      description:
        '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/considering-using-s3-file-replication-read-this-first" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/2015_Headers/nc-partners-aws.jpg?t=1511430893044" alt="Considering using S3 file replication? Read this first." class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p class="p1"><em>If you noticed that S3 recently went down in us-east-1 and were looking at cross-region-replication as a backup solution, you might want to read this first. - Hamin Mousavi</em></p>',
      encoded: {
        __prefix: "content",
        __text:
          '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/considering-using-s3-file-replication-read-this-first" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/2015_Headers/nc-partners-aws.jpg?t=1511430893044" alt="Considering using S3 file replication? Read this first." class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p class="p1"><em>If you noticed that S3 recently went down in us-east-1 and were looking at cross-region-replication as a backup solution, you might want to read this first. - Hamin Mousavi</em></p>    \n<img src="https://track.hubspot.com/__ptq.gif?a=453090&k=14&r=https%3A%2F%2Fwww.nordcloud.com%2Ftech-blog%2Fconsidering-using-s3-file-replication-read-this-first&bu=https%253A%252F%252Fwww.nordcloud.com%252Ftech-blog&bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">'
      },
      category: ["AWS S3", "S3", "ACL", "AWS Lambda"],
      pubDate: "Fri, 03 Mar 2017 06:57:01 GMT",
      author: "hamin.mousavi@nordcloud.se (Hamin Mousavi)",
      guid:
        "https://www.nordcloud.com/tech-blog/considering-using-s3-file-replication-read-this-first",
      date: {
        __prefix: "dc",
        __text: "2017-03-03T06:57:01Z"
      }
    },
    {
      title: "re:Invent 2016 Keynote Announcements",
      link:
        "https://www.nordcloud.com/tech-blog/reinvent-2016-keynote-announcements",
      description:
        '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/reinvent-2016-keynote-announcements" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/reinvent_brand_edit.png?t=1511430893044" alt="re:Invent 2016 Keynote Announcements" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>Yesterday&nbsp;was the formal&nbsp;start of re:Invent, with the first major Keynote from Andy Jassy, the CEO of the company that is largely responsible for changing the way we consume IT.</p>',
      encoded: {
        __prefix: "content",
        __text:
          '<div class="hs-featured-image-wrapper"> \n <a href="https://www.nordcloud.com/tech-blog/reinvent-2016-keynote-announcements" title="" class="hs-featured-image-link"> <img src="https://www.nordcloud.com/hubfs/reinvent_brand_edit.png?t=1511430893044" alt="re:Invent 2016 Keynote Announcements" class="hs-featured-image" style="width:auto !important; max-width:50%; float:left; margin:0 15px 15px 0;"> </a> \n</div>    \n<p>Yesterday&nbsp;was the formal&nbsp;start of re:Invent, with the first major Keynote from Andy Jassy, the CEO of the company that is largely responsible for changing the way we consume IT.</p>    \n<img src="https://track.hubspot.com/__ptq.gif?a=453090&k=14&r=https%3A%2F%2Fwww.nordcloud.com%2Ftech-blog%2Freinvent-2016-keynote-announcements&bu=https%253A%252F%252Fwww.nordcloud.com%252Ftech-blog&bvt=rss" alt="" width="1" height="1" style="min-height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important; ">'
      },
      category: ["AWS", "Big Data", "re:Invent", "IoT", "Compute", "AI"],
      pubDate: "Thu, 01 Dec 2016 15:20:00 GMT",
      author: "philip.smith@nordcloud.com (Philip Smith)",
      guid:
        "https://www.nordcloud.com/tech-blog/reinvent-2016-keynote-announcements",
      date: {
        __prefix: "dc",
        __text: "2016-12-01T15:20:00Z"
      }
    }
  ]
};

const getItems = () => {
  console.log(data.item);
  return data.item.map(item => {
    return (
      <Teaser
        title={item.title}
        author={item.author}
        content={item.description}
      />
    );
  });
};

const App = () => {
  return <div>{getItems()}</div>;
};

ReactDOM.render(<App />, document.getElementById("react-root"));
