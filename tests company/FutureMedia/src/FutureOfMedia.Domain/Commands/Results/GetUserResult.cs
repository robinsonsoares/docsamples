﻿
namespace FutureOfMedia.Domain.Commands.Results
{
    public class GetUserResult
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfilePictureUrl { get; set; }        
    }
}
