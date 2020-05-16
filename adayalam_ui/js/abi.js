var issuerABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "iss_id",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "affln",
        type: "string[]",
      },
    ],
    name: "issuerRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "userIdentityIssued",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dev_retrieve_issuer",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "iss_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "iss_add",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "iss_fee",
            type: "uint256",
          },
          {
            internalType: "string[]",
            name: "iss_affln_org_ids",
            type: "string[]",
          },
          {
            internalType: "bool",
            name: "iss_valid",
            type: "bool",
          },
        ],
        internalType: "struct Iss_org.Issuer",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dev_retrieve_user",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "user_id",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "user_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "user_dob",
            type: "string",
          },
          {
            internalType: "string",
            name: "user_bgrp",
            type: "string",
          },
          {
            internalType: "string",
            name: "user_country",
            type: "string",
          },
          {
            internalType: "string",
            name: "user_state",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "user_phno",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "user_cid",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "user_bio_det",
            type: "string",
          },
          {
            internalType: "bool",
            name: "user_vital",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "user_transl",
            type: "uint256",
          },
        ],
        internalType: "struct Iss_org.User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "ui_iss_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "ui_iss_add",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "ui_iss_fee",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "ui_iss_affln_org_ids",
        type: "string[]",
      },
    ],
    name: "iss_register",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "ui_user_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "ui_user_dob",
        type: "string",
      },
      {
        internalType: "string",
        name: "ui_user_bgrp",
        type: "string",
      },
      {
        internalType: "string",
        name: "ui_user_country",
        type: "string",
      },
      {
        internalType: "string",
        name: "ui_user_state",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "ui_user_phno",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ui_user_cid",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "ui_user_bio_det",
        type: "string",
      },
    ],
    name: "issue_id",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mintMyToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
//contract address. please change the address to your own
var issuerSCAddr = "0x33f7DD787F7C76f3587C44AC1Cd17E55D2A890B9";

var userABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user_id",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "ver_id",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ver_purp",
        type: "string",
      },
    ],
    name: "shareUserIdentity",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ver_id",
        type: "address",
      },
      {
        internalType: "string",
        name: "ui_ver_purp",
        type: "string",
      },
    ],
    name: "share_id",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "view_user_det",
    outputs: [
      {
        internalType: "contract user",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

var userSCAddr = "0x914aa61D6c1349dB8D8b5375f820226fA6b27095";

var orgABI = [
  {
    inputs: [],
    name: "block_issuer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "ui_org_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "ui_org_loc",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "ui_org_type",
        type: "uint8",
      },
    ],
    name: "org_register",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dev_retrieve",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

var orgSCAddr = "0x21599D1d47b62D61059B42A0CA25940F406f7dd2";

var verifierABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "user_id",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "ui_ver_status",
        type: "bool",
      },
    ],
    name: "hasVerified",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ver_id",
        type: "address",
      },
    ],
    name: "verifierRegistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "ui_ver_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "ui_ver_loc",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "ui_ver_type",
        type: "uint8",
      },
    ],
    name: "ver_register",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ui_user_id",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "ui_ver_purp",
        type: "string",
      },
      {
        internalType: "bool",
        name: "ui_ver_status",
        type: "bool",
      },
    ],
    name: "verify_id",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dev_retrieve",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

var verifierSCAddr = "0x3E666448BF98b45E60E7c67f4390d237F8b54183";
