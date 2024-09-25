type UserApiResponse = {
  status: 'Error' | 'Success';
  data?: { id: string; name: string };
  errorMessage?: string;
};

function handleResponse(res: UserApiResponse) {
  if (res.status === 'Success') {
    console.log(res.data.name);
  } else {
    console.log(res.errorMessage.length);
  }
}

// the correct approach is to use discriminated union
type SuccessResponse = {
  status: 'Success';
  data: { id: string; name: string };
};

type ErrorResponse = {
  status: 'Error';
  errorMessage: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse2(res: ApiResponse) {
  if (res.status === 'Success') {
    console.log(res.data.name);
  } else {
    console.log(res.errorMessage.length);
  }
}
